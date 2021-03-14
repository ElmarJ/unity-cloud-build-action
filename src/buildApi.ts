import axios, {AxiosResponse} from 'axios'
import github from '@actions/github'
import BuildResult from './api/buildResult'
import ShareLink from './api/shareLink'

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

  async runBuild(
    buildtargetid: string,
    localcommit = false
  ): Promise<BuildResult> {
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
  ): Promise<BuildResult> {
    const startBuildEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds`
    const startResponse = await this.apiPost<BuildResult[]>(
      startBuildEndpoint,
      {
        commit: localcommit ? github.context.sha : undefined
      }
    )
    return startResponse.data[0]
  }

  async getBuildInfo(
    buildtargetid: string,
    buildnumber: number
  ): Promise<BuildResult> {
    const buildInfoEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}`
    const buildStatusResponse = await this.apiGet<BuildResult>(
      buildInfoEndpoint
    )
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

  async getShareLink(
    buildtargetid: string,
    buildnumber: string
  ): Promise<ShareLink> {
    const shareEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}/share`
    const shareResponse = await this.apiGet<ShareLink>(shareEndpoint)
    return shareResponse.data
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
