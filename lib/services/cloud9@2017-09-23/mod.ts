// Autogenerated API client for: AWS Cloud9

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class Cloud9 {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Cloud9.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-09-23",
    "endpointPrefix": "cloud9",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Cloud9",
    "serviceId": "Cloud9",
    "signatureVersion": "v4",
    "targetPrefix": "AWSCloud9WorkspaceManagementService",
    "uid": "cloud9-2017-09-23"
  };

  async createEnvironmentEC2(
    {abortSignal, ...params}: RequestConfig & s.CreateEnvironmentEC2Request,
  ): Promise<s.CreateEnvironmentEC2Result> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      description: params["description"],
      clientRequestToken: params["clientRequestToken"],
      instanceType: params["instanceType"],
      subnetId: params["subnetId"],
      automaticStopTimeMinutes: params["automaticStopTimeMinutes"],
      ownerArn: params["ownerArn"],
      tags: params["tags"]?.map(x => fromTag(x)),
      connectionType: params["connectionType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateEnvironmentEC2",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "environmentId": "s",
      },
    }, await resp.json());
  }

  async createEnvironmentMembership(
    {abortSignal, ...params}: RequestConfig & s.CreateEnvironmentMembershipRequest,
  ): Promise<s.CreateEnvironmentMembershipResult> {
    const body: jsonP.JSONObject = {
      environmentId: params["environmentId"],
      userArn: params["userArn"],
      permissions: params["permissions"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateEnvironmentMembership",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "membership": toEnvironmentMember,
      },
    }, await resp.json());
  }

  async deleteEnvironment(
    {abortSignal, ...params}: RequestConfig & s.DeleteEnvironmentRequest,
  ): Promise<s.DeleteEnvironmentResult> {
    const body: jsonP.JSONObject = {
      environmentId: params["environmentId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteEnvironment",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteEnvironmentMembership(
    {abortSignal, ...params}: RequestConfig & s.DeleteEnvironmentMembershipRequest,
  ): Promise<s.DeleteEnvironmentMembershipResult> {
    const body: jsonP.JSONObject = {
      environmentId: params["environmentId"],
      userArn: params["userArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteEnvironmentMembership",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeEnvironmentMemberships(
    {abortSignal, ...params}: RequestConfig & s.DescribeEnvironmentMembershipsRequest = {},
  ): Promise<s.DescribeEnvironmentMembershipsResult> {
    const body: jsonP.JSONObject = {
      userArn: params["userArn"],
      environmentId: params["environmentId"],
      permissions: params["permissions"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEnvironmentMemberships",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "memberships": [toEnvironmentMember],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeEnvironmentStatus(
    {abortSignal, ...params}: RequestConfig & s.DescribeEnvironmentStatusRequest,
  ): Promise<s.DescribeEnvironmentStatusResult> {
    const body: jsonP.JSONObject = {
      environmentId: params["environmentId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEnvironmentStatus",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.EnvironmentStatus>(x),
        "message": "s",
      },
    }, await resp.json());
  }

  async describeEnvironments(
    {abortSignal, ...params}: RequestConfig & s.DescribeEnvironmentsRequest,
  ): Promise<s.DescribeEnvironmentsResult> {
    const body: jsonP.JSONObject = {
      environmentIds: params["environmentIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEnvironments",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "environments": [toEnvironment],
      },
    }, await resp.json());
  }

  async listEnvironments(
    {abortSignal, ...params}: RequestConfig & s.ListEnvironmentsRequest = {},
  ): Promise<s.ListEnvironmentsResult> {
    const body: jsonP.JSONObject = {
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEnvironments",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "environmentIds": ["s"],
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
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

  async updateEnvironment(
    {abortSignal, ...params}: RequestConfig & s.UpdateEnvironmentRequest,
  ): Promise<s.UpdateEnvironmentResult> {
    const body: jsonP.JSONObject = {
      environmentId: params["environmentId"],
      name: params["name"],
      description: params["description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateEnvironment",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateEnvironmentMembership(
    {abortSignal, ...params}: RequestConfig & s.UpdateEnvironmentMembershipRequest,
  ): Promise<s.UpdateEnvironmentMembershipResult> {
    const body: jsonP.JSONObject = {
      environmentId: params["environmentId"],
      userArn: params["userArn"],
      permissions: params["permissions"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateEnvironmentMembership",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "membership": toEnvironmentMember,
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

function toEnvironmentMember(root: jsonP.JSONValue): s.EnvironmentMember {
  return jsonP.readObj({
    required: {},
    optional: {
      "permissions": (x: jsonP.JSONValue) => cmnP.readEnum<s.Permissions>(x),
      "userId": "s",
      "userArn": "s",
      "environmentId": "s",
      "lastAccess": "d",
    },
  }, root);
}

function toEnvironment(root: jsonP.JSONValue): s.Environment {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "name": "s",
      "description": "s",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.EnvironmentType>(x),
      "connectionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConnectionType>(x),
      "arn": "s",
      "ownerArn": "s",
      "lifecycle": toEnvironmentLifecycle,
    },
  }, root);
}

function toEnvironmentLifecycle(root: jsonP.JSONValue): s.EnvironmentLifecycle {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.EnvironmentLifecycleStatus>(x),
      "reason": "s",
      "failureResource": "s",
    },
  }, root);
}
