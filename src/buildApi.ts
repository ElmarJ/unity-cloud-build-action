import axios from "axios"
import github from "@actions/github"

export default class BuildApi {
    constructor(private apiKey: string, private orgid: string, private projectid: string) {}
    readonly apiUrl = 'https://build-api.cloud.unity3d.com/api/v1'    
    readonly requestOptions = {
        headers: {
          'Authorization': `Basic ${this.apiKey}`
        }
      }

    async runBuild(buildtargetid: string, localcommit: boolean = false) {
        // Start build and register build number:
        let buildResult = await this.startBuild(buildtargetid, localcommit)
        const buildNumber = buildResult.build

        // Keep checking build status every 15 seconds until done or failed
        while (true) {
            let buildStatus = buildResult.buildStatus
            if (buildStatus === 'queued' || buildStatus === 'sentToBuilder' || buildStatus === 'started' || buildStatus === 'restarted') {
              var sleepDuration = 15;
              await this.sleepFor(sleepDuration);
              buildResult = await this.getBuildInfo(buildtargetid, buildNumber)
            } else {
              break;
            } 
          }

          return buildResult;
    }

    async sleepFor(sleepDurationInSeconds: any): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, sleepDurationInSeconds * 1000);
        });
    }

    async startBuild(buildtargetid: string, localcommit: boolean) {
        const startBuildEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds`
        const startResponse = await this.apiPost(startBuildEndpoint, { commit: localcommit ? github.context.sha : undefined})
        return startResponse.data[0]
    }
    
    async getBuildInfo(buildtargetid: string, buildnumber: string) {
        const buildInfoEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}`
        const buildStatusResponse = await this.apiGet(buildInfoEndpoint)
        return buildStatusResponse.data      
    }

    async createShareLink(buildtargetid: string, buildnumber: string) {
      const shareEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}/share`
      const shareResponse = await this.apiPost(shareEndpoint, {})
      return shareResponse.data      
    }

    async getShareLink(buildtargetid: string, buildnumber: string) {
      const shareEndpoint = `/orgs/${this.orgid}/projects/${this.projectid}/buildtargets/${buildtargetid}/builds/${buildnumber}/share`
      const shareResponse = await this.apiGet(shareEndpoint)
      return shareResponse.data      
    }

    async apiGet(endpoint: string) {
        return await axios.get(this.apiUrl + endpoint, this.requestOptions)
    }

    async apiPost(endpoint: string, body: object) {
        return await axios.post(
            this.apiUrl + endpoint,
            body,
            this.requestOptions
          )
    }
}