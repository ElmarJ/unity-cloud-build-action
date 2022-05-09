/* eslint-disable filenames/match-regex */
import {Download} from './Download'

export default class Build {
  build!: number
  buildtargetid!: string
  buildTargetName!: string
  buildGUID!: string
  buildStatus!:
    | 'queued'
    | 'sentToBuilder'
    | 'started'
    | 'restarted'
    | 'success'
    | 'failure'
    | 'canceled'
    | 'unknown'
  cleanBuild = false
  failureDetails: object[] = []
  canceledBy!:
    | 'api'
    | 'service'
    | 'service-timelimit'
    | 'concurrency-timelimit'
    | 'restart-limit'
    | 'evaluation-timelimit'
  platform!:
    | 'ios'
    | 'android'
    | 'webplayer'
    | 'webgl'
    | 'standaloneosxintel'
    | 'standaloneosxintel64'
    | 'standaloneosxuniversal'
    | 'standalonewindows'
    | 'standalonewindows64'
    | 'standalonelinux'
    | 'standalonelinux64'
    | 'standalonelinuxuniversal'
    | 'cloudrendering'
  download!: Download
  workspaceSize!: number
  created!: string
  finished!: string
  checkoutStartTime!: string
  checkoutTimeInSeconds!: number
  buildStartTime!: string
  buildTimeInSeconds!: number
  publishStartTime!: string
  publishTimeInSeconds!: number
  totalTimeInSeconds!: number
  unitTestTimeInSeconds!: number
  editModeTestTimeInSeconds!: number
  playModeTestTimeInSeconds!: number
  lastBuiltRevision!: string
  changeset: object[] = []
  favorited = false
  label!: string
  deleted = false
  headless!: object
  credentialsOutdated = false
  deletedBy!: string
  queuedReason!:
    | 'targetConcurrency'
    | 'cooldown'
    | 'buildConcurrency'
    | 'waitingForBuildAgent'
    | 'evaluating'
    | 'sentToBuilder'
    | 'notPending'
  cooldownDate!: string
  scmBranch!: string
  unityVersion!: string
  xcodeVersion!: string
  auditChanges!: number
  projectVersion!: object
  projectName!: string
  projectId!: string
  projectGuid!: string
  orgId!: string
  orgFk!: string
  filetoken!: string
  links!: object
  buildReport!: object
  testResults!: object
  error!: string
}
