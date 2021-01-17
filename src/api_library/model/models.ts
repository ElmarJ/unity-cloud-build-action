import localVarRequest from 'request';

export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject10';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineObject8';
export * from './inlineObject9';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse20011';
export * from './inlineResponse20012';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2009';
export * from './orgsOrgidCredentialsSigningAndroidKeystore';
export * from './orgsOrgidCredentialsSigningIosProvisioningProfile';
export * from './orgsOrgidCredentialsSigningOsxCertificate';
export * from './orgsOrgidProjectsProjectidArtifactsDeleteBuilds';
export * from './orgsOrgidProjectsProjectidAuditlogLines';
export * from './orgsOrgidProjectsProjectidBuildtargetsBuildReport';
export * from './orgsOrgidProjectsProjectidBuildtargetsBuilds';
export * from './orgsOrgidProjectsProjectidBuildtargetsBuildtargetidBuildsNumberStepsMessages';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentials';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentials1';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentials1Signing';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigning';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefCertificate';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefKeystore';
export * from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile';
export * from './orgsOrgidProjectsProjectidBuildtargetsFailureDetails';
export * from './orgsOrgidProjectsProjectidBuildtargetsLastBuilt';
export * from './orgsOrgidProjectsProjectidBuildtargetsLinks';
export * from './orgsOrgidProjectsProjectidBuildtargetsProjectVersion';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettings';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvanced';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedAndroid';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnity';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressables';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressablesContentUpdateSettings';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAssetBundles';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerExporter';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettings';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettingsAndroid';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedXcode';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsPlatform';
export * from './orgsOrgidProjectsProjectidBuildtargetsSettingsScm';
export * from './orgsOrgidProjectsProjectidBuildtargetsTestResults';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject10 } from './inlineObject10';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineObject8 } from './inlineObject8';
import { InlineObject9 } from './inlineObject9';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse20011 } from './inlineResponse20011';
import { InlineResponse20012 } from './inlineResponse20012';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2009 } from './inlineResponse2009';
import { OrgsOrgidCredentialsSigningAndroidKeystore } from './orgsOrgidCredentialsSigningAndroidKeystore';
import { OrgsOrgidCredentialsSigningIosProvisioningProfile } from './orgsOrgidCredentialsSigningIosProvisioningProfile';
import { OrgsOrgidCredentialsSigningOsxCertificate } from './orgsOrgidCredentialsSigningOsxCertificate';
import { OrgsOrgidProjectsProjectidArtifactsDeleteBuilds } from './orgsOrgidProjectsProjectidArtifactsDeleteBuilds';
import { OrgsOrgidProjectsProjectidAuditlogLines } from './orgsOrgidProjectsProjectidAuditlogLines';
import { OrgsOrgidProjectsProjectidBuildtargetsBuildReport } from './orgsOrgidProjectsProjectidBuildtargetsBuildReport';
import { OrgsOrgidProjectsProjectidBuildtargetsBuilds } from './orgsOrgidProjectsProjectidBuildtargetsBuilds';
import { OrgsOrgidProjectsProjectidBuildtargetsBuildtargetidBuildsNumberStepsMessages } from './orgsOrgidProjectsProjectidBuildtargetsBuildtargetidBuildsNumberStepsMessages';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentials } from './orgsOrgidProjectsProjectidBuildtargetsCredentials';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentials1 } from './orgsOrgidProjectsProjectidBuildtargetsCredentials1';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentials1Signing } from './orgsOrgidProjectsProjectidBuildtargetsCredentials1Signing';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigning } from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigning';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef } from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefCertificate } from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefCertificate';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefKeystore } from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefKeystore';
import { OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile } from './orgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile';
import { OrgsOrgidProjectsProjectidBuildtargetsFailureDetails } from './orgsOrgidProjectsProjectidBuildtargetsFailureDetails';
import { OrgsOrgidProjectsProjectidBuildtargetsLastBuilt } from './orgsOrgidProjectsProjectidBuildtargetsLastBuilt';
import { OrgsOrgidProjectsProjectidBuildtargetsLinks } from './orgsOrgidProjectsProjectidBuildtargetsLinks';
import { OrgsOrgidProjectsProjectidBuildtargetsProjectVersion } from './orgsOrgidProjectsProjectidBuildtargetsProjectVersion';
import { OrgsOrgidProjectsProjectidBuildtargetsSettings } from './orgsOrgidProjectsProjectidBuildtargetsSettings';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvanced } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvanced';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedAndroid } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedAndroid';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnity } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnity';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressables } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressables';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressablesContentUpdateSettings } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressablesContentUpdateSettings';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAssetBundles } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAssetBundles';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerExporter } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerExporter';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettings } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettings';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettingsAndroid } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettingsAndroid';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedXcode } from './orgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedXcode';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule } from './orgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsPlatform } from './orgsOrgidProjectsProjectidBuildtargetsSettingsPlatform';
import { OrgsOrgidProjectsProjectidBuildtargetsSettingsScm } from './orgsOrgidProjectsProjectidBuildtargetsSettingsScm';
import { OrgsOrgidProjectsProjectidBuildtargetsTestResults } from './orgsOrgidProjectsProjectidBuildtargetsTestResults';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "InlineObject1.StatusEnum": InlineObject1.StatusEnum,
        "InlineObject2.HookTypeEnum": InlineObject2.HookTypeEnum,
        "InlineObject2.EventsEnum": InlineObject2.EventsEnum,
        "InlineObject3.HookTypeEnum": InlineObject3.HookTypeEnum,
        "InlineObject3.EventsEnum": InlineObject3.EventsEnum,
        "InlineObject4.HookTypeEnum": InlineObject4.HookTypeEnum,
        "InlineObject4.EventsEnum": InlineObject4.EventsEnum,
        "InlineObject5.HookTypeEnum": InlineObject5.HookTypeEnum,
        "InlineObject5.EventsEnum": InlineObject5.EventsEnum,
        "InlineObject6.PlatformEnum": InlineObject6.PlatformEnum,
        "InlineObject7.PlatformEnum": InlineObject7.PlatformEnum,
        "InlineObject9.PlatformEnum": InlineObject9.PlatformEnum,
        "InlineResponse20010.PlatformEnum": InlineResponse20010.PlatformEnum,
        "InlineResponse2004.StatusEnum": InlineResponse2004.StatusEnum,
        "InlineResponse2005.HookTypeEnum": InlineResponse2005.HookTypeEnum,
        "InlineResponse2005.EventsEnum": InlineResponse2005.EventsEnum,
        "InlineResponse2007.PlatformEnum": InlineResponse2007.PlatformEnum,
        "InlineResponse2008.PlatformEnum": InlineResponse2008.PlatformEnum,
        "InlineResponse2009.PlatformEnum": InlineResponse2009.PlatformEnum,
        "OrgsOrgidCredentialsSigningIosProvisioningProfile.TypeEnum": OrgsOrgidCredentialsSigningIosProvisioningProfile.TypeEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsBuilds.BuildStatusEnum": OrgsOrgidProjectsProjectidBuildtargetsBuilds.BuildStatusEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsBuilds.CanceledByEnum": OrgsOrgidProjectsProjectidBuildtargetsBuilds.CanceledByEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsBuilds.PlatformEnum": OrgsOrgidProjectsProjectidBuildtargetsBuilds.PlatformEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsBuilds.QueuedReasonEnum": OrgsOrgidProjectsProjectidBuildtargetsBuilds.QueuedReasonEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef.PlatformEnum": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef.PlatformEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile.TypeEnum": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile.TypeEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsProjectVersion.PlatformEnum": OrgsOrgidProjectsProjectidBuildtargetsProjectVersion.PlatformEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings.AndroidBuildSystemEnum": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings.AndroidBuildSystemEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule.RepeatCycleEnum": OrgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule.RepeatCycleEnum,
        "OrgsOrgidProjectsProjectidBuildtargetsSettingsScm.TypeEnum": OrgsOrgidProjectsProjectidBuildtargetsSettingsScm.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject10": InlineObject10,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineObject8": InlineObject8,
    "InlineObject9": InlineObject9,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse20011": InlineResponse20011,
    "InlineResponse20012": InlineResponse20012,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2009": InlineResponse2009,
    "OrgsOrgidCredentialsSigningAndroidKeystore": OrgsOrgidCredentialsSigningAndroidKeystore,
    "OrgsOrgidCredentialsSigningIosProvisioningProfile": OrgsOrgidCredentialsSigningIosProvisioningProfile,
    "OrgsOrgidCredentialsSigningOsxCertificate": OrgsOrgidCredentialsSigningOsxCertificate,
    "OrgsOrgidProjectsProjectidArtifactsDeleteBuilds": OrgsOrgidProjectsProjectidArtifactsDeleteBuilds,
    "OrgsOrgidProjectsProjectidAuditlogLines": OrgsOrgidProjectsProjectidAuditlogLines,
    "OrgsOrgidProjectsProjectidBuildtargetsBuildReport": OrgsOrgidProjectsProjectidBuildtargetsBuildReport,
    "OrgsOrgidProjectsProjectidBuildtargetsBuilds": OrgsOrgidProjectsProjectidBuildtargetsBuilds,
    "OrgsOrgidProjectsProjectidBuildtargetsBuildtargetidBuildsNumberStepsMessages": OrgsOrgidProjectsProjectidBuildtargetsBuildtargetidBuildsNumberStepsMessages,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentials": OrgsOrgidProjectsProjectidBuildtargetsCredentials,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentials1": OrgsOrgidProjectsProjectidBuildtargetsCredentials1,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentials1Signing": OrgsOrgidProjectsProjectidBuildtargetsCredentials1Signing,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigning": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigning,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRef,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefCertificate": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefCertificate,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefKeystore": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefKeystore,
    "OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile": OrgsOrgidProjectsProjectidBuildtargetsCredentialsSigningCredentialResourceRefProvisioningProfile,
    "OrgsOrgidProjectsProjectidBuildtargetsFailureDetails": OrgsOrgidProjectsProjectidBuildtargetsFailureDetails,
    "OrgsOrgidProjectsProjectidBuildtargetsLastBuilt": OrgsOrgidProjectsProjectidBuildtargetsLastBuilt,
    "OrgsOrgidProjectsProjectidBuildtargetsLinks": OrgsOrgidProjectsProjectidBuildtargetsLinks,
    "OrgsOrgidProjectsProjectidBuildtargetsProjectVersion": OrgsOrgidProjectsProjectidBuildtargetsProjectVersion,
    "OrgsOrgidProjectsProjectidBuildtargetsSettings": OrgsOrgidProjectsProjectidBuildtargetsSettings,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvanced": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvanced,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedAndroid": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedAndroid,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnity": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnity,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressables": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressables,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressablesContentUpdateSettings": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAddressablesContentUpdateSettings,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAssetBundles": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityAssetBundles,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityEditorUserBuildSettings,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerExporter": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerExporter,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettings": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettings,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettingsAndroid": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedUnityPlayerSettingsAndroid,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedXcode": OrgsOrgidProjectsProjectidBuildtargetsSettingsAdvancedXcode,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule": OrgsOrgidProjectsProjectidBuildtargetsSettingsBuildSchedule,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsPlatform": OrgsOrgidProjectsProjectidBuildtargetsSettingsPlatform,
    "OrgsOrgidProjectsProjectidBuildtargetsSettingsScm": OrgsOrgidProjectsProjectidBuildtargetsSettingsScm,
    "OrgsOrgidProjectsProjectidBuildtargetsTestResults": OrgsOrgidProjectsProjectidBuildtargetsTestResults,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
