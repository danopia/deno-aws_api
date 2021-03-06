// Autogenerated API client for: AWS Server Migration Service

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class SMS {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(SMS.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2016-10-24",
    "endpointPrefix": "sms",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "SMS",
    "serviceFullName": "AWS Server Migration Service",
    "serviceId": "SMS",
    "signatureVersion": "v4",
    "targetPrefix": "AWSServerMigrationService_V2016_10_24",
    "uid": "sms-2016-10-24"
  };

  async createApp(
    {abortSignal, ...params}: RequestConfig & s.CreateAppRequest = {},
  ): Promise<s.CreateAppResponse> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      description: params["description"],
      roleName: params["roleName"],
      clientToken: params["clientToken"],
      serverGroups: params["serverGroups"]?.map(x => fromServerGroup(x)),
      tags: params["tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateApp",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "appSummary": toAppSummary,
        "serverGroups": [toServerGroup],
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async createReplicationJob(
    {abortSignal, ...params}: RequestConfig & s.CreateReplicationJobRequest,
  ): Promise<s.CreateReplicationJobResponse> {
    const body: jsonP.JSONObject = {
      serverId: params["serverId"],
      seedReplicationTime: jsonP.serializeDate_unixTimestamp(params["seedReplicationTime"]),
      frequency: params["frequency"],
      runOnce: params["runOnce"],
      licenseType: params["licenseType"],
      roleName: params["roleName"],
      description: params["description"],
      numberOfRecentAmisToKeep: params["numberOfRecentAmisToKeep"],
      encrypted: params["encrypted"],
      kmsKeyId: params["kmsKeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateReplicationJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "replicationJobId": "s",
      },
    }, await resp.json());
  }

  async deleteApp(
    {abortSignal, ...params}: RequestConfig & s.DeleteAppRequest = {},
  ): Promise<s.DeleteAppResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      forceStopAppReplication: params["forceStopAppReplication"],
      forceTerminateApp: params["forceTerminateApp"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteApp",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteAppLaunchConfiguration(
    {abortSignal, ...params}: RequestConfig & s.DeleteAppLaunchConfigurationRequest = {},
  ): Promise<s.DeleteAppLaunchConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteAppLaunchConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteAppReplicationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.DeleteAppReplicationConfigurationRequest = {},
  ): Promise<s.DeleteAppReplicationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteAppReplicationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteAppValidationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.DeleteAppValidationConfigurationRequest,
  ): Promise<s.DeleteAppValidationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteAppValidationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteReplicationJob(
    {abortSignal, ...params}: RequestConfig & s.DeleteReplicationJobRequest,
  ): Promise<s.DeleteReplicationJobResponse> {
    const body: jsonP.JSONObject = {
      replicationJobId: params["replicationJobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteReplicationJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteServerCatalog(
    {abortSignal, ...params}: RequestConfig & s.DeleteServerCatalogRequest = {},
  ): Promise<s.DeleteServerCatalogResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteServerCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async disassociateConnector(
    {abortSignal, ...params}: RequestConfig & s.DisassociateConnectorRequest,
  ): Promise<s.DisassociateConnectorResponse> {
    const body: jsonP.JSONObject = {
      connectorId: params["connectorId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateConnector",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async generateChangeSet(
    {abortSignal, ...params}: RequestConfig & s.GenerateChangeSetRequest = {},
  ): Promise<s.GenerateChangeSetResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      changesetFormat: params["changesetFormat"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GenerateChangeSet",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "s3Location": toS3Location,
      },
    }, await resp.json());
  }

  async generateTemplate(
    {abortSignal, ...params}: RequestConfig & s.GenerateTemplateRequest = {},
  ): Promise<s.GenerateTemplateResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      templateFormat: params["templateFormat"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GenerateTemplate",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "s3Location": toS3Location,
      },
    }, await resp.json());
  }

  async getApp(
    {abortSignal, ...params}: RequestConfig & s.GetAppRequest = {},
  ): Promise<s.GetAppResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetApp",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "appSummary": toAppSummary,
        "serverGroups": [toServerGroup],
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async getAppLaunchConfiguration(
    {abortSignal, ...params}: RequestConfig & s.GetAppLaunchConfigurationRequest = {},
  ): Promise<s.GetAppLaunchConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAppLaunchConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "appId": "s",
        "roleName": "s",
        "autoLaunch": "b",
        "serverGroupLaunchConfigurations": [toServerGroupLaunchConfiguration],
      },
    }, await resp.json());
  }

  async getAppReplicationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.GetAppReplicationConfigurationRequest = {},
  ): Promise<s.GetAppReplicationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAppReplicationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "serverGroupReplicationConfigurations": [toServerGroupReplicationConfiguration],
      },
    }, await resp.json());
  }

  async getAppValidationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.GetAppValidationConfigurationRequest,
  ): Promise<s.GetAppValidationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAppValidationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "appValidationConfigurations": [toAppValidationConfiguration],
        "serverGroupValidationConfigurations": [toServerGroupValidationConfiguration],
      },
    }, await resp.json());
  }

  async getAppValidationOutput(
    {abortSignal, ...params}: RequestConfig & s.GetAppValidationOutputRequest,
  ): Promise<s.GetAppValidationOutputResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAppValidationOutput",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "validationOutputList": [toValidationOutput],
      },
    }, await resp.json());
  }

  async getConnectors(
    {abortSignal, ...params}: RequestConfig & s.GetConnectorsRequest = {},
  ): Promise<s.GetConnectorsResponse> {
    const body: jsonP.JSONObject = {
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetConnectors",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "connectorList": [toConnector],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async getReplicationJobs(
    {abortSignal, ...params}: RequestConfig & s.GetReplicationJobsRequest = {},
  ): Promise<s.GetReplicationJobsResponse> {
    const body: jsonP.JSONObject = {
      replicationJobId: params["replicationJobId"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetReplicationJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "replicationJobList": [toReplicationJob],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async getReplicationRuns(
    {abortSignal, ...params}: RequestConfig & s.GetReplicationRunsRequest,
  ): Promise<s.GetReplicationRunsResponse> {
    const body: jsonP.JSONObject = {
      replicationJobId: params["replicationJobId"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetReplicationRuns",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "replicationJob": toReplicationJob,
        "replicationRunList": [toReplicationRun],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async getServers(
    {abortSignal, ...params}: RequestConfig & s.GetServersRequest = {},
  ): Promise<s.GetServersResponse> {
    const body: jsonP.JSONObject = {
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      vmServerAddressList: params["vmServerAddressList"]?.map(x => fromVmServerAddress(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetServers",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "lastModifiedOn": "d",
        "serverCatalogStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ServerCatalogStatus>(x),
        "serverList": [toServer],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async importAppCatalog(
    {abortSignal, ...params}: RequestConfig & s.ImportAppCatalogRequest = {},
  ): Promise<s.ImportAppCatalogResponse> {
    const body: jsonP.JSONObject = {
      roleName: params["roleName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ImportAppCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async importServerCatalog(
    {abortSignal, ...params}: RequestConfig & s.ImportServerCatalogRequest = {},
  ): Promise<s.ImportServerCatalogResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ImportServerCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async launchApp(
    {abortSignal, ...params}: RequestConfig & s.LaunchAppRequest = {},
  ): Promise<s.LaunchAppResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "LaunchApp",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async listApps(
    {abortSignal, ...params}: RequestConfig & s.ListAppsRequest = {},
  ): Promise<s.ListAppsResponse> {
    const body: jsonP.JSONObject = {
      appIds: params["appIds"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListApps",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "apps": [toAppSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async notifyAppValidationOutput(
    {abortSignal, ...params}: RequestConfig & s.NotifyAppValidationOutputRequest,
  ): Promise<s.NotifyAppValidationOutputResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      notificationContext: fromNotificationContext(params["notificationContext"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "NotifyAppValidationOutput",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async putAppLaunchConfiguration(
    {abortSignal, ...params}: RequestConfig & s.PutAppLaunchConfigurationRequest = {},
  ): Promise<s.PutAppLaunchConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      roleName: params["roleName"],
      autoLaunch: params["autoLaunch"],
      serverGroupLaunchConfigurations: params["serverGroupLaunchConfigurations"]?.map(x => fromServerGroupLaunchConfiguration(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutAppLaunchConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async putAppReplicationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.PutAppReplicationConfigurationRequest = {},
  ): Promise<s.PutAppReplicationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      serverGroupReplicationConfigurations: params["serverGroupReplicationConfigurations"]?.map(x => fromServerGroupReplicationConfiguration(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutAppReplicationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async putAppValidationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.PutAppValidationConfigurationRequest,
  ): Promise<s.PutAppValidationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      appValidationConfigurations: params["appValidationConfigurations"]?.map(x => fromAppValidationConfiguration(x)),
      serverGroupValidationConfigurations: params["serverGroupValidationConfigurations"]?.map(x => fromServerGroupValidationConfiguration(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutAppValidationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async startAppReplication(
    {abortSignal, ...params}: RequestConfig & s.StartAppReplicationRequest = {},
  ): Promise<s.StartAppReplicationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartAppReplication",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async startOnDemandAppReplication(
    {abortSignal, ...params}: RequestConfig & s.StartOnDemandAppReplicationRequest,
  ): Promise<s.StartOnDemandAppReplicationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      description: params["description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartOnDemandAppReplication",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async startOnDemandReplicationRun(
    {abortSignal, ...params}: RequestConfig & s.StartOnDemandReplicationRunRequest,
  ): Promise<s.StartOnDemandReplicationRunResponse> {
    const body: jsonP.JSONObject = {
      replicationJobId: params["replicationJobId"],
      description: params["description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartOnDemandReplicationRun",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "replicationRunId": "s",
      },
    }, await resp.json());
  }

  async stopAppReplication(
    {abortSignal, ...params}: RequestConfig & s.StopAppReplicationRequest = {},
  ): Promise<s.StopAppReplicationResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopAppReplication",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async terminateApp(
    {abortSignal, ...params}: RequestConfig & s.TerminateAppRequest = {},
  ): Promise<s.TerminateAppResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TerminateApp",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateApp(
    {abortSignal, ...params}: RequestConfig & s.UpdateAppRequest = {},
  ): Promise<s.UpdateAppResponse> {
    const body: jsonP.JSONObject = {
      appId: params["appId"],
      name: params["name"],
      description: params["description"],
      roleName: params["roleName"],
      serverGroups: params["serverGroups"]?.map(x => fromServerGroup(x)),
      tags: params["tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateApp",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "appSummary": toAppSummary,
        "serverGroups": [toServerGroup],
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async updateReplicationJob(
    {abortSignal, ...params}: RequestConfig & s.UpdateReplicationJobRequest,
  ): Promise<s.UpdateReplicationJobResponse> {
    const body: jsonP.JSONObject = {
      replicationJobId: params["replicationJobId"],
      frequency: params["frequency"],
      nextReplicationRunStartTime: jsonP.serializeDate_unixTimestamp(params["nextReplicationRunStartTime"]),
      licenseType: params["licenseType"],
      roleName: params["roleName"],
      description: params["description"],
      numberOfRecentAmisToKeep: params["numberOfRecentAmisToKeep"],
      encrypted: params["encrypted"],
      kmsKeyId: params["kmsKeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateReplicationJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromServerGroup(input?: s.ServerGroup | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serverGroupId: input["serverGroupId"],
    name: input["name"],
    serverList: input["serverList"]?.map(x => fromServer(x)),
  }
}
function toServerGroup(root: jsonP.JSONValue): s.ServerGroup {
  return jsonP.readObj({
    required: {},
    optional: {
      "serverGroupId": "s",
      "name": "s",
      "serverList": [toServer],
    },
  }, root);
}

function fromServer(input?: s.Server | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serverId: input["serverId"],
    serverType: input["serverType"],
    vmServer: fromVmServer(input["vmServer"]),
    replicationJobId: input["replicationJobId"],
    replicationJobTerminated: input["replicationJobTerminated"],
  }
}
function toServer(root: jsonP.JSONValue): s.Server {
  return jsonP.readObj({
    required: {},
    optional: {
      "serverId": "s",
      "serverType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ServerType>(x),
      "vmServer": toVmServer,
      "replicationJobId": "s",
      "replicationJobTerminated": "b",
    },
  }, root);
}

function fromVmServer(input?: s.VmServer | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    vmServerAddress: fromVmServerAddress(input["vmServerAddress"]),
    vmName: input["vmName"],
    vmManagerName: input["vmManagerName"],
    vmManagerType: input["vmManagerType"],
    vmPath: input["vmPath"],
  }
}
function toVmServer(root: jsonP.JSONValue): s.VmServer {
  return jsonP.readObj({
    required: {},
    optional: {
      "vmServerAddress": toVmServerAddress,
      "vmName": "s",
      "vmManagerName": "s",
      "vmManagerType": (x: jsonP.JSONValue) => cmnP.readEnum<s.VmManagerType>(x),
      "vmPath": "s",
    },
  }, root);
}

function fromVmServerAddress(input?: s.VmServerAddress | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    vmManagerId: input["vmManagerId"],
    vmId: input["vmId"],
  }
}
function toVmServerAddress(root: jsonP.JSONValue): s.VmServerAddress {
  return jsonP.readObj({
    required: {},
    optional: {
      "vmManagerId": "s",
      "vmId": "s",
    },
  }, root);
}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    key: input["key"],
    value: input["value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {},
    optional: {
      "key": "s",
      "value": "s",
    },
  }, root);
}

function fromNotificationContext(input?: s.NotificationContext | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    validationId: input["validationId"],
    status: input["status"],
    statusMessage: input["statusMessage"],
  }
}

function fromServerGroupLaunchConfiguration(input?: s.ServerGroupLaunchConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serverGroupId: input["serverGroupId"],
    launchOrder: input["launchOrder"],
    serverLaunchConfigurations: input["serverLaunchConfigurations"]?.map(x => fromServerLaunchConfiguration(x)),
  }
}
function toServerGroupLaunchConfiguration(root: jsonP.JSONValue): s.ServerGroupLaunchConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "serverGroupId": "s",
      "launchOrder": "n",
      "serverLaunchConfigurations": [toServerLaunchConfiguration],
    },
  }, root);
}

function fromServerLaunchConfiguration(input?: s.ServerLaunchConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    server: fromServer(input["server"]),
    logicalId: input["logicalId"],
    vpc: input["vpc"],
    subnet: input["subnet"],
    securityGroup: input["securityGroup"],
    ec2KeyName: input["ec2KeyName"],
    userData: fromUserData(input["userData"]),
    instanceType: input["instanceType"],
    associatePublicIpAddress: input["associatePublicIpAddress"],
    iamInstanceProfileName: input["iamInstanceProfileName"],
    configureScript: fromS3Location(input["configureScript"]),
    configureScriptType: input["configureScriptType"],
  }
}
function toServerLaunchConfiguration(root: jsonP.JSONValue): s.ServerLaunchConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "server": toServer,
      "logicalId": "s",
      "vpc": "s",
      "subnet": "s",
      "securityGroup": "s",
      "ec2KeyName": "s",
      "userData": toUserData,
      "instanceType": "s",
      "associatePublicIpAddress": "b",
      "iamInstanceProfileName": "s",
      "configureScript": toS3Location,
      "configureScriptType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScriptType>(x),
    },
  }, root);
}

function fromUserData(input?: s.UserData | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    s3Location: fromS3Location(input["s3Location"]),
  }
}
function toUserData(root: jsonP.JSONValue): s.UserData {
  return jsonP.readObj({
    required: {},
    optional: {
      "s3Location": toS3Location,
    },
  }, root);
}

function fromS3Location(input?: s.S3Location | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    bucket: input["bucket"],
    key: input["key"],
  }
}
function toS3Location(root: jsonP.JSONValue): s.S3Location {
  return jsonP.readObj({
    required: {},
    optional: {
      "bucket": "s",
      "key": "s",
    },
  }, root);
}

function fromServerGroupReplicationConfiguration(input?: s.ServerGroupReplicationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serverGroupId: input["serverGroupId"],
    serverReplicationConfigurations: input["serverReplicationConfigurations"]?.map(x => fromServerReplicationConfiguration(x)),
  }
}
function toServerGroupReplicationConfiguration(root: jsonP.JSONValue): s.ServerGroupReplicationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "serverGroupId": "s",
      "serverReplicationConfigurations": [toServerReplicationConfiguration],
    },
  }, root);
}

function fromServerReplicationConfiguration(input?: s.ServerReplicationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    server: fromServer(input["server"]),
    serverReplicationParameters: fromServerReplicationParameters(input["serverReplicationParameters"]),
  }
}
function toServerReplicationConfiguration(root: jsonP.JSONValue): s.ServerReplicationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "server": toServer,
      "serverReplicationParameters": toServerReplicationParameters,
    },
  }, root);
}

function fromServerReplicationParameters(input?: s.ServerReplicationParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    seedTime: jsonP.serializeDate_unixTimestamp(input["seedTime"]),
    frequency: input["frequency"],
    runOnce: input["runOnce"],
    licenseType: input["licenseType"],
    numberOfRecentAmisToKeep: input["numberOfRecentAmisToKeep"],
    encrypted: input["encrypted"],
    kmsKeyId: input["kmsKeyId"],
  }
}
function toServerReplicationParameters(root: jsonP.JSONValue): s.ServerReplicationParameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "seedTime": "d",
      "frequency": "n",
      "runOnce": "b",
      "licenseType": (x: jsonP.JSONValue) => cmnP.readEnum<s.LicenseType>(x),
      "numberOfRecentAmisToKeep": "n",
      "encrypted": "b",
      "kmsKeyId": "s",
    },
  }, root);
}

function fromAppValidationConfiguration(input?: s.AppValidationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    validationId: input["validationId"],
    name: input["name"],
    appValidationStrategy: input["appValidationStrategy"],
    ssmValidationParameters: fromSSMValidationParameters(input["ssmValidationParameters"]),
  }
}
function toAppValidationConfiguration(root: jsonP.JSONValue): s.AppValidationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "validationId": "s",
      "name": "s",
      "appValidationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AppValidationStrategy>(x),
      "ssmValidationParameters": toSSMValidationParameters,
    },
  }, root);
}

function fromSSMValidationParameters(input?: s.SSMValidationParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    source: fromSource(input["source"]),
    instanceId: input["instanceId"],
    scriptType: input["scriptType"],
    command: input["command"],
    executionTimeoutSeconds: input["executionTimeoutSeconds"],
    outputS3BucketName: input["outputS3BucketName"],
  }
}
function toSSMValidationParameters(root: jsonP.JSONValue): s.SSMValidationParameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "source": toSource,
      "instanceId": "s",
      "scriptType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScriptType>(x),
      "command": "s",
      "executionTimeoutSeconds": "n",
      "outputS3BucketName": "s",
    },
  }, root);
}

function fromSource(input?: s.Source | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    s3Location: fromS3Location(input["s3Location"]),
  }
}
function toSource(root: jsonP.JSONValue): s.Source {
  return jsonP.readObj({
    required: {},
    optional: {
      "s3Location": toS3Location,
    },
  }, root);
}

function fromServerGroupValidationConfiguration(input?: s.ServerGroupValidationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serverGroupId: input["serverGroupId"],
    serverValidationConfigurations: input["serverValidationConfigurations"]?.map(x => fromServerValidationConfiguration(x)),
  }
}
function toServerGroupValidationConfiguration(root: jsonP.JSONValue): s.ServerGroupValidationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "serverGroupId": "s",
      "serverValidationConfigurations": [toServerValidationConfiguration],
    },
  }, root);
}

function fromServerValidationConfiguration(input?: s.ServerValidationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    server: fromServer(input["server"]),
    validationId: input["validationId"],
    name: input["name"],
    serverValidationStrategy: input["serverValidationStrategy"],
    userDataValidationParameters: fromUserDataValidationParameters(input["userDataValidationParameters"]),
  }
}
function toServerValidationConfiguration(root: jsonP.JSONValue): s.ServerValidationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "server": toServer,
      "validationId": "s",
      "name": "s",
      "serverValidationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.ServerValidationStrategy>(x),
      "userDataValidationParameters": toUserDataValidationParameters,
    },
  }, root);
}

function fromUserDataValidationParameters(input?: s.UserDataValidationParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    source: fromSource(input["source"]),
    scriptType: input["scriptType"],
  }
}
function toUserDataValidationParameters(root: jsonP.JSONValue): s.UserDataValidationParameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "source": toSource,
      "scriptType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScriptType>(x),
    },
  }, root);
}

function toAppSummary(root: jsonP.JSONValue): s.AppSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "appId": "s",
      "importedAppId": "s",
      "name": "s",
      "description": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AppStatus>(x),
      "statusMessage": "s",
      "replicationConfigurationStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.AppReplicationConfigurationStatus>(x),
      "replicationStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.AppReplicationStatus>(x),
      "replicationStatusMessage": "s",
      "latestReplicationTime": "d",
      "launchConfigurationStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.AppLaunchConfigurationStatus>(x),
      "launchStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.AppLaunchStatus>(x),
      "launchStatusMessage": "s",
      "launchDetails": toLaunchDetails,
      "creationTime": "d",
      "lastModified": "d",
      "roleName": "s",
      "totalServerGroups": "n",
      "totalServers": "n",
    },
  }, root);
}

function toLaunchDetails(root: jsonP.JSONValue): s.LaunchDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "latestLaunchTime": "d",
      "stackName": "s",
      "stackId": "s",
    },
  }, root);
}

function toValidationOutput(root: jsonP.JSONValue): s.ValidationOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "validationId": "s",
      "name": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ValidationStatus>(x),
      "statusMessage": "s",
      "latestValidationTime": "d",
      "appValidationOutput": toAppValidationOutput,
      "serverValidationOutput": toServerValidationOutput,
    },
  }, root);
}

function toAppValidationOutput(root: jsonP.JSONValue): s.AppValidationOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "ssmOutput": toSSMOutput,
    },
  }, root);
}

function toSSMOutput(root: jsonP.JSONValue): s.SSMOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "s3Location": toS3Location,
    },
  }, root);
}

function toServerValidationOutput(root: jsonP.JSONValue): s.ServerValidationOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "server": toServer,
    },
  }, root);
}

function toConnector(root: jsonP.JSONValue): s.Connector {
  return jsonP.readObj({
    required: {},
    optional: {
      "connectorId": "s",
      "version": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConnectorStatus>(x),
      "capabilityList": [(x: jsonP.JSONValue) => cmnP.readEnum<s.ConnectorCapability>(x)],
      "vmManagerName": "s",
      "vmManagerType": (x: jsonP.JSONValue) => cmnP.readEnum<s.VmManagerType>(x),
      "vmManagerId": "s",
      "ipAddress": "s",
      "macAddress": "s",
      "associatedOn": "d",
    },
  }, root);
}

function toReplicationJob(root: jsonP.JSONValue): s.ReplicationJob {
  return jsonP.readObj({
    required: {},
    optional: {
      "replicationJobId": "s",
      "serverId": "s",
      "serverType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ServerType>(x),
      "vmServer": toVmServer,
      "seedReplicationTime": "d",
      "frequency": "n",
      "runOnce": "b",
      "nextReplicationRunStartTime": "d",
      "licenseType": (x: jsonP.JSONValue) => cmnP.readEnum<s.LicenseType>(x),
      "roleName": "s",
      "latestAmiId": "s",
      "state": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReplicationJobState>(x),
      "statusMessage": "s",
      "description": "s",
      "numberOfRecentAmisToKeep": "n",
      "encrypted": "b",
      "kmsKeyId": "s",
      "replicationRunList": [toReplicationRun],
    },
  }, root);
}

function toReplicationRun(root: jsonP.JSONValue): s.ReplicationRun {
  return jsonP.readObj({
    required: {},
    optional: {
      "replicationRunId": "s",
      "state": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReplicationRunState>(x),
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReplicationRunType>(x),
      "stageDetails": toReplicationRunStageDetails,
      "statusMessage": "s",
      "amiId": "s",
      "scheduledStartTime": "d",
      "completedTime": "d",
      "description": "s",
      "encrypted": "b",
      "kmsKeyId": "s",
    },
  }, root);
}

function toReplicationRunStageDetails(root: jsonP.JSONValue): s.ReplicationRunStageDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "stage": "s",
      "stageProgress": "s",
    },
  }, root);
}
