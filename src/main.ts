import * as core from '@actions/core'
import * as github from '@actions/github'
import * as axios from 'axios'

async function run(): Promise<void> {
  try {
    const orgid: string = core.getInput('orgid')
    const projectid: string = core.getInput('projectid')
    const buildtargetid: string = core.getInput('buildtargetid')
    const apiKey = core.getInput('apikey')
    const apiUrl = 'https://build-api.cloud.unity3d.com/api/v1'

    const startBuildEndpoint = `/orgs/${orgid}/projects/${projectid}/buildtargets/${buildtargetid}/builds`
    core.info(`Using ${apiUrl + startBuildEndpoint}`)
    const startBuildData = {
      clean: false,
      delay: 0,
      commit: github.context.sha,
      headless: false,
      label: '',
      platform: 'standalonelinux'
    }
    const requestOptions = {
      headers: {
        'Authorization': `Basic ${apiKey}`
      }
    }

    core.info('start')
    core.info(new Date().toTimeString())

    const response = await axios.default.post(
      apiUrl + startBuildEndpoint,
      startBuildData,
      requestOptions
    )

    const buildResult = response.data[0]

    core.debug(`Build finished in ${buildResult.buildTimeInSeconds} seconds.`)
    if (buildResult.buildStatus !== 'success') {
      core.setFailed(
        `Build failed with status ${buildResult.buildStatus}. Message: ${buildResult.failureDetails}`
      )
    }

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error.response) {
      core.setFailed(
        `Error HTTP response. Error: ${error.response.data.error}. Status: ${error.response.status}`
      )
    } else if (error.request) {
      core.setFailed(`Error HTTP request: ${error.request}.`)
    } else {
      core.setFailed(error.message)
    }
  }
}

run()
