import * as core from '@actions/core'
import * as github from '@actions/github'
import * as axios from 'axios'
import BuildApi from './buildApi'

async function run(): Promise<void> {
  try {
    const orgid: string = core.getInput('orgid')
    const projectid: string = core.getInput('projectid')
    const buildtargetid: string = core.getInput('buildtargetid')
    const apiKey = core.getInput('apikey')
    const useactioncommit = core.getInput('useactioncommit')

    const api = new BuildApi(apiKey, orgid, projectid)
    const buildResult = await api.runBuild(buildtargetid)

    core.debug(`Build finished`)
    if (buildResult.buildStatus !== 'success') {
      core.setFailed(
        `Build failed with status ${buildResult.buildStatus}. Info: ${JSON.stringify(buildResult)}`
      )
    } else {
      core.info(`Build succeeded in ${buildResult.totalTimeInSeconds} seconds.`)
    }
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
