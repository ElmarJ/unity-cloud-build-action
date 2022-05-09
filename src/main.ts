/* eslint-disable i18n-text/no-en */
import * as core from '@actions/core'
import {AxiosError} from 'axios'
import BuildApi from './BuildApi'

async function run(): Promise<void> {
  try {
    const orgid: string = core.getInput('orgid')
    const projectid: string = core.getInput('projectid')
    const buildtargetid: string = core.getInput('buildtargetid')
    const apiKey = core.getInput('apikey')
    // const useactioncommit = core.getInput('useactioncommit')

    const api = new BuildApi(apiKey, orgid, projectid)

    core.info(`Starting cloud build now...`)

    const buildResult = await api.runBuild(buildtargetid)

    core.info(`Build finished!`)
    core.setOutput('BuildResult', buildResult)

    core.info('Getting share link')
    const shareResult = await api.createShareLink(
      buildtargetid,
      buildResult.build
    )

    core.info(`Share link: ${shareResult.shareid}`)
    core.setOutput('share-link', shareResult.shareid)

    if (buildResult.buildStatus !== 'success') {
      core.setFailed(
        `Build failed with status ${
          buildResult.buildStatus
        }. Info: ${JSON.stringify(buildResult)}`
      )
    } else {
      core.info(`Build succeeded in ${buildResult.totalTimeInSeconds} seconds.`)
    }
  } catch (error) {
    if (error instanceof AxiosError && error && error.response) {
      core.setFailed(
        `Error HTTP response. Error: ${error.response.data.error}. Status: ${error.response.status}`
      )
    } else if (error instanceof AxiosError && error && error.request) {
      core.setFailed(`Error HTTP request: ${error.request}.`)
    } else if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
