// Autogenerated API client for: AWS Batch

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class Batch {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Batch.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2016-08-10",
    "endpointPrefix": "batch",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "AWS Batch",
    "serviceFullName": "AWS Batch",
    "serviceId": "Batch",
    "signatureVersion": "v4",
    "uid": "batch-2016-08-10"
  };

  async cancelJob(
    {abortSignal, ...params}: RequestConfig & s.CancelJobRequest,
  ): Promise<s.CancelJobResponse> {
    const body: jsonP.JSONObject = {
      jobId: params["jobId"],
      reason: params["reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CancelJob",
      requestUri: "/v1/canceljob",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async createComputeEnvironment(
    {abortSignal, ...params}: RequestConfig & s.CreateComputeEnvironmentRequest,
  ): Promise<s.CreateComputeEnvironmentResponse> {
    const body: jsonP.JSONObject = {
      computeEnvironmentName: params["computeEnvironmentName"],
      type: params["type"],
      state: params["state"],
      computeResources: fromComputeResource(params["computeResources"]),
      serviceRole: params["serviceRole"],
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateComputeEnvironment",
      requestUri: "/v1/createcomputeenvironment",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "computeEnvironmentName": "s",
        "computeEnvironmentArn": "s",
      },
    }, await resp.json());
  }

  async createJobQueue(
    {abortSignal, ...params}: RequestConfig & s.CreateJobQueueRequest,
  ): Promise<s.CreateJobQueueResponse> {
    const body: jsonP.JSONObject = {
      jobQueueName: params["jobQueueName"],
      state: params["state"],
      priority: params["priority"],
      computeEnvironmentOrder: params["computeEnvironmentOrder"]?.map(x => fromComputeEnvironmentOrder(x)),
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateJobQueue",
      requestUri: "/v1/createjobqueue",
    });
    return jsonP.readObj({
      required: {
        "jobQueueName": "s",
        "jobQueueArn": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteComputeEnvironment(
    {abortSignal, ...params}: RequestConfig & s.DeleteComputeEnvironmentRequest,
  ): Promise<s.DeleteComputeEnvironmentResponse> {
    const body: jsonP.JSONObject = {
      computeEnvironment: params["computeEnvironment"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteComputeEnvironment",
      requestUri: "/v1/deletecomputeenvironment",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteJobQueue(
    {abortSignal, ...params}: RequestConfig & s.DeleteJobQueueRequest,
  ): Promise<s.DeleteJobQueueResponse> {
    const body: jsonP.JSONObject = {
      jobQueue: params["jobQueue"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteJobQueue",
      requestUri: "/v1/deletejobqueue",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deregisterJobDefinition(
    {abortSignal, ...params}: RequestConfig & s.DeregisterJobDefinitionRequest,
  ): Promise<s.DeregisterJobDefinitionResponse> {
    const body: jsonP.JSONObject = {
      jobDefinition: params["jobDefinition"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeregisterJobDefinition",
      requestUri: "/v1/deregisterjobdefinition",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeComputeEnvironments(
    {abortSignal, ...params}: RequestConfig & s.DescribeComputeEnvironmentsRequest = {},
  ): Promise<s.DescribeComputeEnvironmentsResponse> {
    const body: jsonP.JSONObject = {
      computeEnvironments: params["computeEnvironments"],
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeComputeEnvironments",
      requestUri: "/v1/describecomputeenvironments",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "computeEnvironments": [toComputeEnvironmentDetail],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeJobDefinitions(
    {abortSignal, ...params}: RequestConfig & s.DescribeJobDefinitionsRequest = {},
  ): Promise<s.DescribeJobDefinitionsResponse> {
    const body: jsonP.JSONObject = {
      jobDefinitions: params["jobDefinitions"],
      maxResults: params["maxResults"],
      jobDefinitionName: params["jobDefinitionName"],
      status: params["status"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeJobDefinitions",
      requestUri: "/v1/describejobdefinitions",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobDefinitions": [toJobDefinition],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeJobQueues(
    {abortSignal, ...params}: RequestConfig & s.DescribeJobQueuesRequest = {},
  ): Promise<s.DescribeJobQueuesResponse> {
    const body: jsonP.JSONObject = {
      jobQueues: params["jobQueues"],
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeJobQueues",
      requestUri: "/v1/describejobqueues",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobQueues": [toJobQueueDetail],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeJobs(
    {abortSignal, ...params}: RequestConfig & s.DescribeJobsRequest,
  ): Promise<s.DescribeJobsResponse> {
    const body: jsonP.JSONObject = {
      jobs: params["jobs"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeJobs",
      requestUri: "/v1/describejobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobs": [toJobDetail],
      },
    }, await resp.json());
  }

  async listJobs(
    {abortSignal, ...params}: RequestConfig & s.ListJobsRequest = {},
  ): Promise<s.ListJobsResponse> {
    const body: jsonP.JSONObject = {
      jobQueue: params["jobQueue"],
      arrayJobId: params["arrayJobId"],
      multiNodeJobId: params["multiNodeJobId"],
      jobStatus: params["jobStatus"],
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListJobs",
      requestUri: "/v1/listjobs",
    });
    return jsonP.readObj({
      required: {
        "jobSummaryList": [toJobSummary],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async registerJobDefinition(
    {abortSignal, ...params}: RequestConfig & s.RegisterJobDefinitionRequest,
  ): Promise<s.RegisterJobDefinitionResponse> {
    const body: jsonP.JSONObject = {
      jobDefinitionName: params["jobDefinitionName"],
      type: params["type"],
      parameters: params["parameters"],
      containerProperties: fromContainerProperties(params["containerProperties"]),
      nodeProperties: fromNodeProperties(params["nodeProperties"]),
      retryStrategy: fromRetryStrategy(params["retryStrategy"]),
      propagateTags: params["propagateTags"],
      timeout: fromJobTimeout(params["timeout"]),
      tags: params["tags"],
      platformCapabilities: params["platformCapabilities"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterJobDefinition",
      requestUri: "/v1/registerjobdefinition",
    });
    return jsonP.readObj({
      required: {
        "jobDefinitionName": "s",
        "jobDefinitionArn": "s",
        "revision": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async submitJob(
    {abortSignal, ...params}: RequestConfig & s.SubmitJobRequest,
  ): Promise<s.SubmitJobResponse> {
    const body: jsonP.JSONObject = {
      jobName: params["jobName"],
      jobQueue: params["jobQueue"],
      arrayProperties: fromArrayProperties(params["arrayProperties"]),
      dependsOn: params["dependsOn"]?.map(x => fromJobDependency(x)),
      jobDefinition: params["jobDefinition"],
      parameters: params["parameters"],
      containerOverrides: fromContainerOverrides(params["containerOverrides"]),
      nodeOverrides: fromNodeOverrides(params["nodeOverrides"]),
      retryStrategy: fromRetryStrategy(params["retryStrategy"]),
      propagateTags: params["propagateTags"],
      timeout: fromJobTimeout(params["timeout"]),
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SubmitJob",
      requestUri: "/v1/submitjob",
    });
    return jsonP.readObj({
      required: {
        "jobName": "s",
        "jobId": "s",
      },
      optional: {
        "jobArn": "s",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/v1/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async terminateJob(
    {abortSignal, ...params}: RequestConfig & s.TerminateJobRequest,
  ): Promise<s.TerminateJobResponse> {
    const body: jsonP.JSONObject = {
      jobId: params["jobId"],
      reason: params["reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TerminateJob",
      requestUri: "/v1/terminatejob",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["tagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/v1/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateComputeEnvironment(
    {abortSignal, ...params}: RequestConfig & s.UpdateComputeEnvironmentRequest,
  ): Promise<s.UpdateComputeEnvironmentResponse> {
    const body: jsonP.JSONObject = {
      computeEnvironment: params["computeEnvironment"],
      state: params["state"],
      computeResources: fromComputeResourceUpdate(params["computeResources"]),
      serviceRole: params["serviceRole"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateComputeEnvironment",
      requestUri: "/v1/updatecomputeenvironment",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "computeEnvironmentName": "s",
        "computeEnvironmentArn": "s",
      },
    }, await resp.json());
  }

  async updateJobQueue(
    {abortSignal, ...params}: RequestConfig & s.UpdateJobQueueRequest,
  ): Promise<s.UpdateJobQueueResponse> {
    const body: jsonP.JSONObject = {
      jobQueue: params["jobQueue"],
      state: params["state"],
      priority: params["priority"],
      computeEnvironmentOrder: params["computeEnvironmentOrder"]?.map(x => fromComputeEnvironmentOrder(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateJobQueue",
      requestUri: "/v1/updatejobqueue",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobQueueName": "s",
        "jobQueueArn": "s",
      },
    }, await resp.json());
  }

}

function fromComputeResource(input?: s.ComputeResource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    type: input["type"],
    allocationStrategy: input["allocationStrategy"],
    minvCpus: input["minvCpus"],
    maxvCpus: input["maxvCpus"],
    desiredvCpus: input["desiredvCpus"],
    instanceTypes: input["instanceTypes"],
    imageId: input["imageId"],
    subnets: input["subnets"],
    securityGroupIds: input["securityGroupIds"],
    ec2KeyPair: input["ec2KeyPair"],
    instanceRole: input["instanceRole"],
    tags: input["tags"],
    placementGroup: input["placementGroup"],
    bidPercentage: input["bidPercentage"],
    spotIamFleetRole: input["spotIamFleetRole"],
    launchTemplate: fromLaunchTemplateSpecification(input["launchTemplate"]),
    ec2Configuration: input["ec2Configuration"]?.map(x => fromEc2Configuration(x)),
  }
}
function toComputeResource(root: jsonP.JSONValue): s.ComputeResource {
  return jsonP.readObj({
    required: {
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.CRType>(x),
      "maxvCpus": "n",
      "subnets": ["s"],
    },
    optional: {
      "allocationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.CRAllocationStrategy>(x),
      "minvCpus": "n",
      "desiredvCpus": "n",
      "instanceTypes": ["s"],
      "imageId": "s",
      "securityGroupIds": ["s"],
      "ec2KeyPair": "s",
      "instanceRole": "s",
      "tags": x => jsonP.readMap(String, String, x),
      "placementGroup": "s",
      "bidPercentage": "n",
      "spotIamFleetRole": "s",
      "launchTemplate": toLaunchTemplateSpecification,
      "ec2Configuration": [toEc2Configuration],
    },
  }, root);
}

function fromLaunchTemplateSpecification(input?: s.LaunchTemplateSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    launchTemplateId: input["launchTemplateId"],
    launchTemplateName: input["launchTemplateName"],
    version: input["version"],
  }
}
function toLaunchTemplateSpecification(root: jsonP.JSONValue): s.LaunchTemplateSpecification {
  return jsonP.readObj({
    required: {},
    optional: {
      "launchTemplateId": "s",
      "launchTemplateName": "s",
      "version": "s",
    },
  }, root);
}

function fromEc2Configuration(input?: s.Ec2Configuration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    imageType: input["imageType"],
    imageIdOverride: input["imageIdOverride"],
  }
}
function toEc2Configuration(root: jsonP.JSONValue): s.Ec2Configuration {
  return jsonP.readObj({
    required: {
      "imageType": "s",
    },
    optional: {
      "imageIdOverride": "s",
    },
  }, root);
}

function fromComputeEnvironmentOrder(input?: s.ComputeEnvironmentOrder | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    order: input["order"],
    computeEnvironment: input["computeEnvironment"],
  }
}
function toComputeEnvironmentOrder(root: jsonP.JSONValue): s.ComputeEnvironmentOrder {
  return jsonP.readObj({
    required: {
      "order": "n",
      "computeEnvironment": "s",
    },
    optional: {},
  }, root);
}

function fromContainerProperties(input?: s.ContainerProperties | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    image: input["image"],
    vcpus: input["vcpus"],
    memory: input["memory"],
    command: input["command"],
    jobRoleArn: input["jobRoleArn"],
    executionRoleArn: input["executionRoleArn"],
    volumes: input["volumes"]?.map(x => fromVolume(x)),
    environment: input["environment"]?.map(x => fromKeyValuePair(x)),
    mountPoints: input["mountPoints"]?.map(x => fromMountPoint(x)),
    readonlyRootFilesystem: input["readonlyRootFilesystem"],
    privileged: input["privileged"],
    ulimits: input["ulimits"]?.map(x => fromUlimit(x)),
    user: input["user"],
    instanceType: input["instanceType"],
    resourceRequirements: input["resourceRequirements"]?.map(x => fromResourceRequirement(x)),
    linuxParameters: fromLinuxParameters(input["linuxParameters"]),
    logConfiguration: fromLogConfiguration(input["logConfiguration"]),
    secrets: input["secrets"]?.map(x => fromSecret(x)),
    networkConfiguration: fromNetworkConfiguration(input["networkConfiguration"]),
    fargatePlatformConfiguration: fromFargatePlatformConfiguration(input["fargatePlatformConfiguration"]),
  }
}
function toContainerProperties(root: jsonP.JSONValue): s.ContainerProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "image": "s",
      "vcpus": "n",
      "memory": "n",
      "command": ["s"],
      "jobRoleArn": "s",
      "executionRoleArn": "s",
      "volumes": [toVolume],
      "environment": [toKeyValuePair],
      "mountPoints": [toMountPoint],
      "readonlyRootFilesystem": "b",
      "privileged": "b",
      "ulimits": [toUlimit],
      "user": "s",
      "instanceType": "s",
      "resourceRequirements": [toResourceRequirement],
      "linuxParameters": toLinuxParameters,
      "logConfiguration": toLogConfiguration,
      "secrets": [toSecret],
      "networkConfiguration": toNetworkConfiguration,
      "fargatePlatformConfiguration": toFargatePlatformConfiguration,
    },
  }, root);
}

function fromVolume(input?: s.Volume | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    host: fromHost(input["host"]),
    name: input["name"],
  }
}
function toVolume(root: jsonP.JSONValue): s.Volume {
  return jsonP.readObj({
    required: {},
    optional: {
      "host": toHost,
      "name": "s",
    },
  }, root);
}

function fromHost(input?: s.Host | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    sourcePath: input["sourcePath"],
  }
}
function toHost(root: jsonP.JSONValue): s.Host {
  return jsonP.readObj({
    required: {},
    optional: {
      "sourcePath": "s",
    },
  }, root);
}

function fromKeyValuePair(input?: s.KeyValuePair | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    value: input["value"],
  }
}
function toKeyValuePair(root: jsonP.JSONValue): s.KeyValuePair {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "value": "s",
    },
  }, root);
}

function fromMountPoint(input?: s.MountPoint | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    containerPath: input["containerPath"],
    readOnly: input["readOnly"],
    sourceVolume: input["sourceVolume"],
  }
}
function toMountPoint(root: jsonP.JSONValue): s.MountPoint {
  return jsonP.readObj({
    required: {},
    optional: {
      "containerPath": "s",
      "readOnly": "b",
      "sourceVolume": "s",
    },
  }, root);
}

function fromUlimit(input?: s.Ulimit | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    hardLimit: input["hardLimit"],
    name: input["name"],
    softLimit: input["softLimit"],
  }
}
function toUlimit(root: jsonP.JSONValue): s.Ulimit {
  return jsonP.readObj({
    required: {
      "hardLimit": "n",
      "name": "s",
      "softLimit": "n",
    },
    optional: {},
  }, root);
}

function fromResourceRequirement(input?: s.ResourceRequirement | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    value: input["value"],
    type: input["type"],
  }
}
function toResourceRequirement(root: jsonP.JSONValue): s.ResourceRequirement {
  return jsonP.readObj({
    required: {
      "value": "s",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceType>(x),
    },
    optional: {},
  }, root);
}

function fromLinuxParameters(input?: s.LinuxParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    devices: input["devices"]?.map(x => fromDevice(x)),
    initProcessEnabled: input["initProcessEnabled"],
    sharedMemorySize: input["sharedMemorySize"],
    tmpfs: input["tmpfs"]?.map(x => fromTmpfs(x)),
    maxSwap: input["maxSwap"],
    swappiness: input["swappiness"],
  }
}
function toLinuxParameters(root: jsonP.JSONValue): s.LinuxParameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "devices": [toDevice],
      "initProcessEnabled": "b",
      "sharedMemorySize": "n",
      "tmpfs": [toTmpfs],
      "maxSwap": "n",
      "swappiness": "n",
    },
  }, root);
}

function fromDevice(input?: s.Device | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    hostPath: input["hostPath"],
    containerPath: input["containerPath"],
    permissions: input["permissions"],
  }
}
function toDevice(root: jsonP.JSONValue): s.Device {
  return jsonP.readObj({
    required: {
      "hostPath": "s",
    },
    optional: {
      "containerPath": "s",
      "permissions": [(x: jsonP.JSONValue) => cmnP.readEnum<s.DeviceCgroupPermission>(x)],
    },
  }, root);
}

function fromTmpfs(input?: s.Tmpfs | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    containerPath: input["containerPath"],
    size: input["size"],
    mountOptions: input["mountOptions"],
  }
}
function toTmpfs(root: jsonP.JSONValue): s.Tmpfs {
  return jsonP.readObj({
    required: {
      "containerPath": "s",
      "size": "n",
    },
    optional: {
      "mountOptions": ["s"],
    },
  }, root);
}

function fromLogConfiguration(input?: s.LogConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    logDriver: input["logDriver"],
    options: input["options"],
    secretOptions: input["secretOptions"]?.map(x => fromSecret(x)),
  }
}
function toLogConfiguration(root: jsonP.JSONValue): s.LogConfiguration {
  return jsonP.readObj({
    required: {
      "logDriver": (x: jsonP.JSONValue) => cmnP.readEnum<s.LogDriver>(x),
    },
    optional: {
      "options": x => jsonP.readMap(String, String, x),
      "secretOptions": [toSecret],
    },
  }, root);
}

function fromSecret(input?: s.Secret | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    valueFrom: input["valueFrom"],
  }
}
function toSecret(root: jsonP.JSONValue): s.Secret {
  return jsonP.readObj({
    required: {
      "name": "s",
      "valueFrom": "s",
    },
    optional: {},
  }, root);
}

function fromNetworkConfiguration(input?: s.NetworkConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    assignPublicIp: input["assignPublicIp"],
  }
}
function toNetworkConfiguration(root: jsonP.JSONValue): s.NetworkConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "assignPublicIp": (x: jsonP.JSONValue) => cmnP.readEnum<s.AssignPublicIp>(x),
    },
  }, root);
}

function fromFargatePlatformConfiguration(input?: s.FargatePlatformConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    platformVersion: input["platformVersion"],
  }
}
function toFargatePlatformConfiguration(root: jsonP.JSONValue): s.FargatePlatformConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "platformVersion": "s",
    },
  }, root);
}

function fromNodeProperties(input?: s.NodeProperties | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    numNodes: input["numNodes"],
    mainNode: input["mainNode"],
    nodeRangeProperties: input["nodeRangeProperties"]?.map(x => fromNodeRangeProperty(x)),
  }
}
function toNodeProperties(root: jsonP.JSONValue): s.NodeProperties {
  return jsonP.readObj({
    required: {
      "numNodes": "n",
      "mainNode": "n",
      "nodeRangeProperties": [toNodeRangeProperty],
    },
    optional: {},
  }, root);
}

function fromNodeRangeProperty(input?: s.NodeRangeProperty | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    targetNodes: input["targetNodes"],
    container: fromContainerProperties(input["container"]),
  }
}
function toNodeRangeProperty(root: jsonP.JSONValue): s.NodeRangeProperty {
  return jsonP.readObj({
    required: {
      "targetNodes": "s",
    },
    optional: {
      "container": toContainerProperties,
    },
  }, root);
}

function fromRetryStrategy(input?: s.RetryStrategy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    attempts: input["attempts"],
    evaluateOnExit: input["evaluateOnExit"]?.map(x => fromEvaluateOnExit(x)),
  }
}
function toRetryStrategy(root: jsonP.JSONValue): s.RetryStrategy {
  return jsonP.readObj({
    required: {},
    optional: {
      "attempts": "n",
      "evaluateOnExit": [toEvaluateOnExit],
    },
  }, root);
}

function fromEvaluateOnExit(input?: s.EvaluateOnExit | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    onStatusReason: input["onStatusReason"],
    onReason: input["onReason"],
    onExitCode: input["onExitCode"],
    action: input["action"],
  }
}
function toEvaluateOnExit(root: jsonP.JSONValue): s.EvaluateOnExit {
  return jsonP.readObj({
    required: {
      "action": (x: jsonP.JSONValue) => cmnP.readEnum<s.RetryAction>(x),
    },
    optional: {
      "onStatusReason": "s",
      "onReason": "s",
      "onExitCode": "s",
    },
  }, root);
}

function fromJobTimeout(input?: s.JobTimeout | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    attemptDurationSeconds: input["attemptDurationSeconds"],
  }
}
function toJobTimeout(root: jsonP.JSONValue): s.JobTimeout {
  return jsonP.readObj({
    required: {},
    optional: {
      "attemptDurationSeconds": "n",
    },
  }, root);
}

function fromArrayProperties(input?: s.ArrayProperties | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    size: input["size"],
  }
}

function fromJobDependency(input?: s.JobDependency | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    jobId: input["jobId"],
    type: input["type"],
  }
}
function toJobDependency(root: jsonP.JSONValue): s.JobDependency {
  return jsonP.readObj({
    required: {},
    optional: {
      "jobId": "s",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ArrayJobDependency>(x),
    },
  }, root);
}

function fromContainerOverrides(input?: s.ContainerOverrides | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    vcpus: input["vcpus"],
    memory: input["memory"],
    command: input["command"],
    instanceType: input["instanceType"],
    environment: input["environment"]?.map(x => fromKeyValuePair(x)),
    resourceRequirements: input["resourceRequirements"]?.map(x => fromResourceRequirement(x)),
  }
}

function fromNodeOverrides(input?: s.NodeOverrides | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    numNodes: input["numNodes"],
    nodePropertyOverrides: input["nodePropertyOverrides"]?.map(x => fromNodePropertyOverride(x)),
  }
}

function fromNodePropertyOverride(input?: s.NodePropertyOverride | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    targetNodes: input["targetNodes"],
    containerOverrides: fromContainerOverrides(input["containerOverrides"]),
  }
}

function fromComputeResourceUpdate(input?: s.ComputeResourceUpdate | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    minvCpus: input["minvCpus"],
    maxvCpus: input["maxvCpus"],
    desiredvCpus: input["desiredvCpus"],
    subnets: input["subnets"],
    securityGroupIds: input["securityGroupIds"],
  }
}

function toComputeEnvironmentDetail(root: jsonP.JSONValue): s.ComputeEnvironmentDetail {
  return jsonP.readObj({
    required: {
      "computeEnvironmentName": "s",
      "computeEnvironmentArn": "s",
      "ecsClusterArn": "s",
    },
    optional: {
      "tags": x => jsonP.readMap(String, String, x),
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.CEType>(x),
      "state": (x: jsonP.JSONValue) => cmnP.readEnum<s.CEState>(x),
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.CEStatus>(x),
      "statusReason": "s",
      "computeResources": toComputeResource,
      "serviceRole": "s",
    },
  }, root);
}

function toJobDefinition(root: jsonP.JSONValue): s.JobDefinition {
  return jsonP.readObj({
    required: {
      "jobDefinitionName": "s",
      "jobDefinitionArn": "s",
      "revision": "n",
      "type": "s",
    },
    optional: {
      "status": "s",
      "parameters": x => jsonP.readMap(String, String, x),
      "retryStrategy": toRetryStrategy,
      "containerProperties": toContainerProperties,
      "timeout": toJobTimeout,
      "nodeProperties": toNodeProperties,
      "tags": x => jsonP.readMap(String, String, x),
      "propagateTags": "b",
      "platformCapabilities": [(x: jsonP.JSONValue) => cmnP.readEnum<s.PlatformCapability>(x)],
    },
  }, root);
}

function toJobQueueDetail(root: jsonP.JSONValue): s.JobQueueDetail {
  return jsonP.readObj({
    required: {
      "jobQueueName": "s",
      "jobQueueArn": "s",
      "state": (x: jsonP.JSONValue) => cmnP.readEnum<s.JQState>(x),
      "priority": "n",
      "computeEnvironmentOrder": [toComputeEnvironmentOrder],
    },
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.JQStatus>(x),
      "statusReason": "s",
      "tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toJobDetail(root: jsonP.JSONValue): s.JobDetail {
  return jsonP.readObj({
    required: {
      "jobName": "s",
      "jobId": "s",
      "jobQueue": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobStatus>(x),
      "startedAt": "n",
      "jobDefinition": "s",
    },
    optional: {
      "jobArn": "s",
      "attempts": [toAttemptDetail],
      "statusReason": "s",
      "createdAt": "n",
      "retryStrategy": toRetryStrategy,
      "stoppedAt": "n",
      "dependsOn": [toJobDependency],
      "parameters": x => jsonP.readMap(String, String, x),
      "container": toContainerDetail,
      "nodeDetails": toNodeDetails,
      "nodeProperties": toNodeProperties,
      "arrayProperties": toArrayPropertiesDetail,
      "timeout": toJobTimeout,
      "tags": x => jsonP.readMap(String, String, x),
      "propagateTags": "b",
      "platformCapabilities": [(x: jsonP.JSONValue) => cmnP.readEnum<s.PlatformCapability>(x)],
    },
  }, root);
}

function toAttemptDetail(root: jsonP.JSONValue): s.AttemptDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "container": toAttemptContainerDetail,
      "startedAt": "n",
      "stoppedAt": "n",
      "statusReason": "s",
    },
  }, root);
}

function toAttemptContainerDetail(root: jsonP.JSONValue): s.AttemptContainerDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "containerInstanceArn": "s",
      "taskArn": "s",
      "exitCode": "n",
      "reason": "s",
      "logStreamName": "s",
      "networkInterfaces": [toNetworkInterface],
    },
  }, root);
}

function toNetworkInterface(root: jsonP.JSONValue): s.NetworkInterface {
  return jsonP.readObj({
    required: {},
    optional: {
      "attachmentId": "s",
      "ipv6Address": "s",
      "privateIpv4Address": "s",
    },
  }, root);
}

function toContainerDetail(root: jsonP.JSONValue): s.ContainerDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "image": "s",
      "vcpus": "n",
      "memory": "n",
      "command": ["s"],
      "jobRoleArn": "s",
      "executionRoleArn": "s",
      "volumes": [toVolume],
      "environment": [toKeyValuePair],
      "mountPoints": [toMountPoint],
      "readonlyRootFilesystem": "b",
      "ulimits": [toUlimit],
      "privileged": "b",
      "user": "s",
      "exitCode": "n",
      "reason": "s",
      "containerInstanceArn": "s",
      "taskArn": "s",
      "logStreamName": "s",
      "instanceType": "s",
      "networkInterfaces": [toNetworkInterface],
      "resourceRequirements": [toResourceRequirement],
      "linuxParameters": toLinuxParameters,
      "logConfiguration": toLogConfiguration,
      "secrets": [toSecret],
      "networkConfiguration": toNetworkConfiguration,
      "fargatePlatformConfiguration": toFargatePlatformConfiguration,
    },
  }, root);
}

function toNodeDetails(root: jsonP.JSONValue): s.NodeDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "nodeIndex": "n",
      "isMainNode": "b",
    },
  }, root);
}

function toArrayPropertiesDetail(root: jsonP.JSONValue): s.ArrayPropertiesDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "statusSummary": x => jsonP.readMap(String, Number, x),
      "size": "n",
      "index": "n",
    },
  }, root);
}

function toJobSummary(root: jsonP.JSONValue): s.JobSummary {
  return jsonP.readObj({
    required: {
      "jobId": "s",
      "jobName": "s",
    },
    optional: {
      "jobArn": "s",
      "createdAt": "n",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobStatus>(x),
      "statusReason": "s",
      "startedAt": "n",
      "stoppedAt": "n",
      "container": toContainerSummary,
      "arrayProperties": toArrayPropertiesSummary,
      "nodeProperties": toNodePropertiesSummary,
    },
  }, root);
}

function toContainerSummary(root: jsonP.JSONValue): s.ContainerSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "exitCode": "n",
      "reason": "s",
    },
  }, root);
}

function toArrayPropertiesSummary(root: jsonP.JSONValue): s.ArrayPropertiesSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "size": "n",
      "index": "n",
    },
  }, root);
}

function toNodePropertiesSummary(root: jsonP.JSONValue): s.NodePropertiesSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "isMainNode": "b",
      "numNodes": "n",
      "nodeIndex": "n",
    },
  }, root);
}
