// Autogenerated API client for: Amazon FSx

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import * as uuidv4 from "https://deno.land/std@0.86.0/uuid/v4.ts";
import type * as s from "./structs.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class FSx {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(FSx.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-03-01",
    "endpointPrefix": "fsx",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon FSx",
    "serviceId": "FSx",
    "signatureVersion": "v4",
    "signingName": "fsx",
    "targetPrefix": "AWSSimbaAPIService_v20180301",
    "uid": "fsx-2018-03-01"
  };

  async associateFileSystemAliases(
    {abortSignal, ...params}: RequestConfig & s.AssociateFileSystemAliasesRequest,
  ): Promise<s.AssociateFileSystemAliasesResponse> {
    const body: jsonP.JSONObject = {
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      FileSystemId: params["FileSystemId"],
      Aliases: params["Aliases"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateFileSystemAliases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Aliases": [toAlias],
      },
    }, await resp.json());
  }

  async cancelDataRepositoryTask(
    {abortSignal, ...params}: RequestConfig & s.CancelDataRepositoryTaskRequest,
  ): Promise<s.CancelDataRepositoryTaskResponse> {
    const body: jsonP.JSONObject = {
      TaskId: params["TaskId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CancelDataRepositoryTask",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.DataRepositoryTaskLifecycle>(x),
        "TaskId": "s",
      },
    }, await resp.json());
  }

  async createBackup(
    {abortSignal, ...params}: RequestConfig & s.CreateBackupRequest,
  ): Promise<s.CreateBackupResponse> {
    const body: jsonP.JSONObject = {
      FileSystemId: params["FileSystemId"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateBackup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Backup": toBackup,
      },
    }, await resp.json());
  }

  async createDataRepositoryTask(
    {abortSignal, ...params}: RequestConfig & s.CreateDataRepositoryTaskRequest,
  ): Promise<s.CreateDataRepositoryTaskResponse> {
    const body: jsonP.JSONObject = {
      Type: params["Type"],
      Paths: params["Paths"],
      FileSystemId: params["FileSystemId"],
      Report: fromCompletionReport(params["Report"]),
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDataRepositoryTask",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DataRepositoryTask": toDataRepositoryTask,
      },
    }, await resp.json());
  }

  async createFileSystem(
    {abortSignal, ...params}: RequestConfig & s.CreateFileSystemRequest,
  ): Promise<s.CreateFileSystemResponse> {
    const body: jsonP.JSONObject = {
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      FileSystemType: params["FileSystemType"],
      StorageCapacity: params["StorageCapacity"],
      StorageType: params["StorageType"],
      SubnetIds: params["SubnetIds"],
      SecurityGroupIds: params["SecurityGroupIds"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      KmsKeyId: params["KmsKeyId"],
      WindowsConfiguration: fromCreateFileSystemWindowsConfiguration(params["WindowsConfiguration"]),
      LustreConfiguration: fromCreateFileSystemLustreConfiguration(params["LustreConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateFileSystem",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FileSystem": toFileSystem,
      },
    }, await resp.json());
  }

  async createFileSystemFromBackup(
    {abortSignal, ...params}: RequestConfig & s.CreateFileSystemFromBackupRequest,
  ): Promise<s.CreateFileSystemFromBackupResponse> {
    const body: jsonP.JSONObject = {
      BackupId: params["BackupId"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      SubnetIds: params["SubnetIds"],
      SecurityGroupIds: params["SecurityGroupIds"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      WindowsConfiguration: fromCreateFileSystemWindowsConfiguration(params["WindowsConfiguration"]),
      LustreConfiguration: fromCreateFileSystemLustreConfiguration(params["LustreConfiguration"]),
      StorageType: params["StorageType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateFileSystemFromBackup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FileSystem": toFileSystem,
      },
    }, await resp.json());
  }

  async deleteBackup(
    {abortSignal, ...params}: RequestConfig & s.DeleteBackupRequest,
  ): Promise<s.DeleteBackupResponse> {
    const body: jsonP.JSONObject = {
      BackupId: params["BackupId"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteBackup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BackupId": "s",
        "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.BackupLifecycle>(x),
      },
    }, await resp.json());
  }

  async deleteFileSystem(
    {abortSignal, ...params}: RequestConfig & s.DeleteFileSystemRequest,
  ): Promise<s.DeleteFileSystemResponse> {
    const body: jsonP.JSONObject = {
      FileSystemId: params["FileSystemId"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      WindowsConfiguration: fromDeleteFileSystemWindowsConfiguration(params["WindowsConfiguration"]),
      LustreConfiguration: fromDeleteFileSystemLustreConfiguration(params["LustreConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteFileSystem",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FileSystemId": "s",
        "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.FileSystemLifecycle>(x),
        "WindowsResponse": toDeleteFileSystemWindowsResponse,
        "LustreResponse": toDeleteFileSystemLustreResponse,
      },
    }, await resp.json());
  }

  async describeBackups(
    {abortSignal, ...params}: RequestConfig & s.DescribeBackupsRequest = {},
  ): Promise<s.DescribeBackupsResponse> {
    const body: jsonP.JSONObject = {
      BackupIds: params["BackupIds"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeBackups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Backups": [toBackup],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeDataRepositoryTasks(
    {abortSignal, ...params}: RequestConfig & s.DescribeDataRepositoryTasksRequest = {},
  ): Promise<s.DescribeDataRepositoryTasksResponse> {
    const body: jsonP.JSONObject = {
      TaskIds: params["TaskIds"],
      Filters: params["Filters"]?.map(x => fromDataRepositoryTaskFilter(x)),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDataRepositoryTasks",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DataRepositoryTasks": [toDataRepositoryTask],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeFileSystemAliases(
    {abortSignal, ...params}: RequestConfig & s.DescribeFileSystemAliasesRequest,
  ): Promise<s.DescribeFileSystemAliasesResponse> {
    const body: jsonP.JSONObject = {
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      FileSystemId: params["FileSystemId"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeFileSystemAliases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Aliases": [toAlias],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeFileSystems(
    {abortSignal, ...params}: RequestConfig & s.DescribeFileSystemsRequest = {},
  ): Promise<s.DescribeFileSystemsResponse> {
    const body: jsonP.JSONObject = {
      FileSystemIds: params["FileSystemIds"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeFileSystems",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FileSystems": [toFileSystem],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async disassociateFileSystemAliases(
    {abortSignal, ...params}: RequestConfig & s.DisassociateFileSystemAliasesRequest,
  ): Promise<s.DisassociateFileSystemAliasesResponse> {
    const body: jsonP.JSONObject = {
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      FileSystemId: params["FileSystemId"],
      Aliases: params["Aliases"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateFileSystemAliases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Aliases": [toAlias],
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateFileSystem(
    {abortSignal, ...params}: RequestConfig & s.UpdateFileSystemRequest,
  ): Promise<s.UpdateFileSystemResponse> {
    const body: jsonP.JSONObject = {
      FileSystemId: params["FileSystemId"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      StorageCapacity: params["StorageCapacity"],
      WindowsConfiguration: fromUpdateFileSystemWindowsConfiguration(params["WindowsConfiguration"]),
      LustreConfiguration: fromUpdateFileSystemLustreConfiguration(params["LustreConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFileSystem",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FileSystem": toFileSystem,
      },
    }, await resp.json());
  }

}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromCompletionReport(input?: s.CompletionReport | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Enabled: input["Enabled"],
    Path: input["Path"],
    Format: input["Format"],
    Scope: input["Scope"],
  }
}
function toCompletionReport(root: jsonP.JSONValue): s.CompletionReport {
  return jsonP.readObj({
    required: {
      "Enabled": "b",
    },
    optional: {
      "Path": "s",
      "Format": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReportFormat>(x),
      "Scope": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReportScope>(x),
    },
  }, root);
}

function fromCreateFileSystemWindowsConfiguration(input?: s.CreateFileSystemWindowsConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ActiveDirectoryId: input["ActiveDirectoryId"],
    SelfManagedActiveDirectoryConfiguration: fromSelfManagedActiveDirectoryConfiguration(input["SelfManagedActiveDirectoryConfiguration"]),
    DeploymentType: input["DeploymentType"],
    PreferredSubnetId: input["PreferredSubnetId"],
    ThroughputCapacity: input["ThroughputCapacity"],
    WeeklyMaintenanceStartTime: input["WeeklyMaintenanceStartTime"],
    DailyAutomaticBackupStartTime: input["DailyAutomaticBackupStartTime"],
    AutomaticBackupRetentionDays: input["AutomaticBackupRetentionDays"],
    CopyTagsToBackups: input["CopyTagsToBackups"],
    Aliases: input["Aliases"],
  }
}

function fromSelfManagedActiveDirectoryConfiguration(input?: s.SelfManagedActiveDirectoryConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DomainName: input["DomainName"],
    OrganizationalUnitDistinguishedName: input["OrganizationalUnitDistinguishedName"],
    FileSystemAdministratorsGroup: input["FileSystemAdministratorsGroup"],
    UserName: input["UserName"],
    Password: input["Password"],
    DnsIps: input["DnsIps"],
  }
}

function fromCreateFileSystemLustreConfiguration(input?: s.CreateFileSystemLustreConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    WeeklyMaintenanceStartTime: input["WeeklyMaintenanceStartTime"],
    ImportPath: input["ImportPath"],
    ExportPath: input["ExportPath"],
    ImportedFileChunkSize: input["ImportedFileChunkSize"],
    DeploymentType: input["DeploymentType"],
    AutoImportPolicy: input["AutoImportPolicy"],
    PerUnitStorageThroughput: input["PerUnitStorageThroughput"],
    DailyAutomaticBackupStartTime: input["DailyAutomaticBackupStartTime"],
    AutomaticBackupRetentionDays: input["AutomaticBackupRetentionDays"],
    CopyTagsToBackups: input["CopyTagsToBackups"],
    DriveCacheType: input["DriveCacheType"],
  }
}

function fromDeleteFileSystemWindowsConfiguration(input?: s.DeleteFileSystemWindowsConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    SkipFinalBackup: input["SkipFinalBackup"],
    FinalBackupTags: input["FinalBackupTags"]?.map(x => fromTag(x)),
  }
}

function fromDeleteFileSystemLustreConfiguration(input?: s.DeleteFileSystemLustreConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    SkipFinalBackup: input["SkipFinalBackup"],
    FinalBackupTags: input["FinalBackupTags"]?.map(x => fromTag(x)),
  }
}

function fromFilter(input?: s.Filter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
  }
}

function fromDataRepositoryTaskFilter(input?: s.DataRepositoryTaskFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
  }
}

function fromUpdateFileSystemWindowsConfiguration(input?: s.UpdateFileSystemWindowsConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    WeeklyMaintenanceStartTime: input["WeeklyMaintenanceStartTime"],
    DailyAutomaticBackupStartTime: input["DailyAutomaticBackupStartTime"],
    AutomaticBackupRetentionDays: input["AutomaticBackupRetentionDays"],
    ThroughputCapacity: input["ThroughputCapacity"],
    SelfManagedActiveDirectoryConfiguration: fromSelfManagedActiveDirectoryConfigurationUpdates(input["SelfManagedActiveDirectoryConfiguration"]),
  }
}

function fromSelfManagedActiveDirectoryConfigurationUpdates(input?: s.SelfManagedActiveDirectoryConfigurationUpdates | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    UserName: input["UserName"],
    Password: input["Password"],
    DnsIps: input["DnsIps"],
  }
}

function fromUpdateFileSystemLustreConfiguration(input?: s.UpdateFileSystemLustreConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    WeeklyMaintenanceStartTime: input["WeeklyMaintenanceStartTime"],
    DailyAutomaticBackupStartTime: input["DailyAutomaticBackupStartTime"],
    AutomaticBackupRetentionDays: input["AutomaticBackupRetentionDays"],
    AutoImportPolicy: input["AutoImportPolicy"],
  }
}

function toAlias(root: jsonP.JSONValue): s.Alias {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.AliasLifecycle>(x),
    },
  }, root);
}

function toBackup(root: jsonP.JSONValue): s.Backup {
  return jsonP.readObj({
    required: {
      "BackupId": "s",
      "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.BackupLifecycle>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.BackupType>(x),
      "CreationTime": "d",
      "FileSystem": toFileSystem,
    },
    optional: {
      "FailureDetails": toBackupFailureDetails,
      "ProgressPercent": "n",
      "KmsKeyId": "s",
      "ResourceARN": "s",
      "Tags": [toTag],
      "DirectoryInformation": toActiveDirectoryBackupAttributes,
    },
  }, root);
}

function toBackupFailureDetails(root: jsonP.JSONValue): s.BackupFailureDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Message": "s",
    },
  }, root);
}

function toFileSystem(root: jsonP.JSONValue): s.FileSystem {
  return jsonP.readObj({
    required: {},
    optional: {
      "OwnerId": "s",
      "CreationTime": "d",
      "FileSystemId": "s",
      "FileSystemType": (x: jsonP.JSONValue) => cmnP.readEnum<s.FileSystemType>(x),
      "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.FileSystemLifecycle>(x),
      "FailureDetails": toFileSystemFailureDetails,
      "StorageCapacity": "n",
      "StorageType": (x: jsonP.JSONValue) => cmnP.readEnum<s.StorageType>(x),
      "VpcId": "s",
      "SubnetIds": ["s"],
      "NetworkInterfaceIds": ["s"],
      "DNSName": "s",
      "KmsKeyId": "s",
      "ResourceARN": "s",
      "Tags": [toTag],
      "WindowsConfiguration": toWindowsFileSystemConfiguration,
      "LustreConfiguration": toLustreFileSystemConfiguration,
      "AdministrativeActions": [toAdministrativeAction],
    },
  }, root);
}

function toFileSystemFailureDetails(root: jsonP.JSONValue): s.FileSystemFailureDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Message": "s",
    },
  }, root);
}

function toWindowsFileSystemConfiguration(root: jsonP.JSONValue): s.WindowsFileSystemConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "ActiveDirectoryId": "s",
      "SelfManagedActiveDirectoryConfiguration": toSelfManagedActiveDirectoryAttributes,
      "DeploymentType": (x: jsonP.JSONValue) => cmnP.readEnum<s.WindowsDeploymentType>(x),
      "RemoteAdministrationEndpoint": "s",
      "PreferredSubnetId": "s",
      "PreferredFileServerIp": "s",
      "ThroughputCapacity": "n",
      "MaintenanceOperationsInProgress": [(x: jsonP.JSONValue) => cmnP.readEnum<s.FileSystemMaintenanceOperation>(x)],
      "WeeklyMaintenanceStartTime": "s",
      "DailyAutomaticBackupStartTime": "s",
      "AutomaticBackupRetentionDays": "n",
      "CopyTagsToBackups": "b",
      "Aliases": [toAlias],
    },
  }, root);
}

function toSelfManagedActiveDirectoryAttributes(root: jsonP.JSONValue): s.SelfManagedActiveDirectoryAttributes {
  return jsonP.readObj({
    required: {},
    optional: {
      "DomainName": "s",
      "OrganizationalUnitDistinguishedName": "s",
      "FileSystemAdministratorsGroup": "s",
      "UserName": "s",
      "DnsIps": ["s"],
    },
  }, root);
}

function toLustreFileSystemConfiguration(root: jsonP.JSONValue): s.LustreFileSystemConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "WeeklyMaintenanceStartTime": "s",
      "DataRepositoryConfiguration": toDataRepositoryConfiguration,
      "DeploymentType": (x: jsonP.JSONValue) => cmnP.readEnum<s.LustreDeploymentType>(x),
      "PerUnitStorageThroughput": "n",
      "MountName": "s",
      "DailyAutomaticBackupStartTime": "s",
      "AutomaticBackupRetentionDays": "n",
      "CopyTagsToBackups": "b",
      "DriveCacheType": (x: jsonP.JSONValue) => cmnP.readEnum<s.DriveCacheType>(x),
    },
  }, root);
}

function toDataRepositoryConfiguration(root: jsonP.JSONValue): s.DataRepositoryConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.DataRepositoryLifecycle>(x),
      "ImportPath": "s",
      "ExportPath": "s",
      "ImportedFileChunkSize": "n",
      "AutoImportPolicy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AutoImportPolicyType>(x),
      "FailureDetails": toDataRepositoryFailureDetails,
    },
  }, root);
}

function toDataRepositoryFailureDetails(root: jsonP.JSONValue): s.DataRepositoryFailureDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Message": "s",
    },
  }, root);
}

function toAdministrativeAction(root: jsonP.JSONValue): s.AdministrativeAction {
  return jsonP.readObj({
    required: {},
    optional: {
      "AdministrativeActionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.AdministrativeActionType>(x),
      "ProgressPercent": "n",
      "RequestTime": "d",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
      "TargetFileSystemValues": toFileSystem,
      "FailureDetails": toAdministrativeActionFailureDetails,
    },
  }, root);
}

function toAdministrativeActionFailureDetails(root: jsonP.JSONValue): s.AdministrativeActionFailureDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Message": "s",
    },
  }, root);
}

function toActiveDirectoryBackupAttributes(root: jsonP.JSONValue): s.ActiveDirectoryBackupAttributes {
  return jsonP.readObj({
    required: {},
    optional: {
      "DomainName": "s",
      "ActiveDirectoryId": "s",
    },
  }, root);
}

function toDataRepositoryTask(root: jsonP.JSONValue): s.DataRepositoryTask {
  return jsonP.readObj({
    required: {
      "TaskId": "s",
      "Lifecycle": (x: jsonP.JSONValue) => cmnP.readEnum<s.DataRepositoryTaskLifecycle>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.DataRepositoryTaskType>(x),
      "CreationTime": "d",
      "FileSystemId": "s",
    },
    optional: {
      "StartTime": "d",
      "EndTime": "d",
      "ResourceARN": "s",
      "Tags": [toTag],
      "Paths": ["s"],
      "FailureDetails": toDataRepositoryTaskFailureDetails,
      "Status": toDataRepositoryTaskStatus,
      "Report": toCompletionReport,
    },
  }, root);
}

function toDataRepositoryTaskFailureDetails(root: jsonP.JSONValue): s.DataRepositoryTaskFailureDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Message": "s",
    },
  }, root);
}

function toDataRepositoryTaskStatus(root: jsonP.JSONValue): s.DataRepositoryTaskStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "TotalCount": "n",
      "SucceededCount": "n",
      "FailedCount": "n",
      "LastUpdatedTime": "d",
    },
  }, root);
}

function toDeleteFileSystemWindowsResponse(root: jsonP.JSONValue): s.DeleteFileSystemWindowsResponse {
  return jsonP.readObj({
    required: {},
    optional: {
      "FinalBackupId": "s",
      "FinalBackupTags": [toTag],
    },
  }, root);
}

function toDeleteFileSystemLustreResponse(root: jsonP.JSONValue): s.DeleteFileSystemLustreResponse {
  return jsonP.readObj({
    required: {},
    optional: {
      "FinalBackupId": "s",
      "FinalBackupTags": [toTag],
    },
  }, root);
}
