export * from './buildsApi';
import { BuildsApi } from './buildsApi';
export * from './buildtargetsApi';
import { BuildtargetsApi } from './buildtargetsApi';
export * from './configApi';
import { ConfigApi } from './configApi';
export * from './credentialsApi';
import { CredentialsApi } from './credentialsApi';
export * from './orgsApi';
import { OrgsApi } from './orgsApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './publicApi';
import { PublicApi } from './publicApi';
export * from './sharesApi';
import { SharesApi } from './sharesApi';
export * from './statusApi';
import { StatusApi } from './statusApi';
export * from './userdevicesApi';
import { UserdevicesApi } from './userdevicesApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [BuildsApi, BuildtargetsApi, ConfigApi, CredentialsApi, OrgsApi, ProjectsApi, PublicApi, SharesApi, StatusApi, UserdevicesApi, UsersApi, WebhooksApi];
