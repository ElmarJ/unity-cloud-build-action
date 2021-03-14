import axios, {AxiosResponse} from 'axios'
import github from '@actions/github'
import ShareLink from './api/shareLink'
import Build from './api/build'
import { GitHub } from '@actions/github/lib/utils'
import { countReset } from 'node:console'
import * as core from '@actions/core'

export default class BuildApi {
  requestOptions: {headers: {Authorization: string}}
  constructor(
    private apiKey: string,
    private orgid: string,
    private projectid: string
  ) {
    this.requestOptions = {
      headers: {
        Authorization: `Basic ${this.apiKey}`
      }
    }
  }
  readonly apiUrl = 'https://build-api.cloud.unity3d.com/api/v1'

  async runBuild(buildtargetid: string, localcommit = false): Promise<Build> {
    // Start build and register build number:
    let buildResult = await this.startBuild(buildtargetid, localcommit)
    const buildNumber = buildResult.build

    // Keep checking build status every 15 seconds until done or failed
    for (;;) {
      const buildStatus = buildResult.buildStatus
      if (
        buildStatus === 'queued' ||
        buildStatus === 'sentToBuilder' ||
        buildStatus === 'started' ||
        buildStatus === 'restarted'
      ) {
        const sleepDuration = 15
        await this.sleepFor(sleepDuration)
        buildResult = await this.getBuildInfo(buildtargetid, buildNumber)
      } else {
        break
      }
    }

    return buildResult
  }

  async sleepFor(sleepDurationInSeconds: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(resolve, sleepDurationInSeconds * 1000)
    })
  }

  async startBuild(
    buildtargetid: string,
    localcommit: boolean
  ): Promise<Build> {
    const startBuildEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds`
    const startResponse = await this.apiPost<Build[]>(startBuildEndpoint, {
      commit: localcommit ? github.context.sha : undefined
    })
    return startResponse.data[0]
  }

  async getBuildInfo(
    buildtargetid: string,
    buildnumber: number
  ): Promise<Build> {
    const buildInfoEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}`
    const buildStatusResponse = await this.apiGet<Build>(buildInfoEndpoint)
    return buildStatusResponse.data
  }

  async createShareLink(
    buildtargetid: string,
    buildnumber: number
  ): Promise<ShareLink> {
    const shareEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}/share`
    const shareResponse = await this.apiPost<ShareLink>(shareEndpoint, {})
    return shareResponse.data
  }

  async getShareLinkId(
    buildtargetid: string,
    buildnumber: number
  ): Promise<ShareLink> {
    const shareEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}/share`
    const shareResponse = await this.apiGet<ShareLink>(shareEndpoint)
    return shareResponse.data
  }

  async getShareInfo(shareid: string): Promise<Build> {
    const shareEndpoint = `/shares/${shareid}`
    const shareResponse = await this.apiGet<Build>(shareEndpoint)
    return shareResponse.data
  }

  async getShareInfoFromBuildId(
    buildtargetid: string,
    buildnumber: number
  ): Promise<string> {
    const shareLinkIdData = await this.getShareLinkId(
      buildtargetid,
      buildnumber
    )
    const shareLinkData = await this.getShareInfo(shareLinkIdData.shareid)
    core.info(`Info: ${JSON.stringify(shareLinkData)}`)
    return shareLinkData['download']['href']
  }

  async apiGet<T>(endpoint: string): Promise<AxiosResponse<T>> {
    return await axios.get<T>(this.apiUrl + endpoint, this.requestOptions)
  }

  async apiPost<T>(endpoint: string, body: object): Promise<AxiosResponse<T>> {
    return await axios.post<T>(
      this.apiUrl + endpoint,
      body,
      this.requestOptions
    )
  }
}
