import * as core from '@actions/core'
import * as unity from './api_library/api'

async function run(): Promise<void> {
  try {
    const orgid: string = core.getInput('orgid')
    const projectid: string = core.getInput('projectid')
    const buildtargetid: string = core.getInput('buildtargetid')
    const unityBuilds = new unity.BuildsApi()

    core.debug('start')
    core.debug(new Date().toTimeString())

    var response = await unityBuilds.startBuilds(
      orgid,
      projectid,
      buildtargetid
    )
    var buildResult = response.body[0]

    core.debug(`Build finished in ${buildResult.buildTimeInSeconds} seconds.`)
    if (
      buildResult.buildStatus !=
      unity.OrgsOrgidProjectsProjectidBuildtargetsBuilds.BuildStatusEnum.Success
    ) {
      core.setFailed(
        `Build failed with status ${buildResult.buildStatus}. Message: ${buildResult.failureDetails}`
      )
    }

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
