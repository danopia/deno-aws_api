// Autogenerated API client for: AWS CodeStar connections

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class CodeStarconnections {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CodeStarconnections.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2019-12-01",
    "endpointPrefix": "codestar-connections",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceFullName": "AWS CodeStar connections",
    "serviceId": "CodeStar connections",
    "signatureVersion": "v4",
    "signingName": "codestar-connections",
    "targetPrefix": "com.amazonaws.codestar.connections.CodeStar_connections_20191201",
    "uid": "codestar-connections-2019-12-01"
  };

  async createConnection(
    {abortSignal, ...params}: RequestConfig & s.CreateConnectionInput,
  ): Promise<s.CreateConnectionOutput> {
    const body: jsonP.JSONObject = {
      ProviderType: params["ProviderType"],
      ConnectionName: params["ConnectionName"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      HostArn: params["HostArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateConnection",
    });
    return jsonP.readObj({
      required: {
        "ConnectionArn": "s",
      },
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async createHost(
    {abortSignal, ...params}: RequestConfig & s.CreateHostInput,
  ): Promise<s.CreateHostOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      ProviderType: params["ProviderType"],
      ProviderEndpoint: params["ProviderEndpoint"],
      VpcConfiguration: fromVpcConfiguration(params["VpcConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HostArn": "s",
      },
    }, await resp.json());
  }

  async deleteConnection(
    {abortSignal, ...params}: RequestConfig & s.DeleteConnectionInput,
  ): Promise<s.DeleteConnectionOutput> {
    const body: jsonP.JSONObject = {
      ConnectionArn: params["ConnectionArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteConnection",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteHost(
    {abortSignal, ...params}: RequestConfig & s.DeleteHostInput,
  ): Promise<s.DeleteHostOutput> {
    const body: jsonP.JSONObject = {
      HostArn: params["HostArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getConnection(
    {abortSignal, ...params}: RequestConfig & s.GetConnectionInput,
  ): Promise<s.GetConnectionOutput> {
    const body: jsonP.JSONObject = {
      ConnectionArn: params["ConnectionArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetConnection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Connection": toConnection,
      },
    }, await resp.json());
  }

  async getHost(
    {abortSignal, ...params}: RequestConfig & s.GetHostInput,
  ): Promise<s.GetHostOutput> {
    const body: jsonP.JSONObject = {
      HostArn: params["HostArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Name": "s",
        "Status": "s",
        "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
        "ProviderEndpoint": "s",
        "VpcConfiguration": toVpcConfiguration,
      },
    }, await resp.json());
  }

  async listConnections(
    {abortSignal, ...params}: RequestConfig & s.ListConnectionsInput = {},
  ): Promise<s.ListConnectionsOutput> {
    const body: jsonP.JSONObject = {
      ProviderTypeFilter: params["ProviderTypeFilter"],
      HostArnFilter: params["HostArnFilter"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListConnections",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Connections": [toConnection],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listHosts(
    {abortSignal, ...params}: RequestConfig & s.ListHostsInput = {},
  ): Promise<s.ListHostsOutput> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListHosts",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Hosts": [toHost],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceInput,
  ): Promise<s.ListTagsForResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
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
    {abortSignal, ...params}: RequestConfig & s.TagResourceInput,
  ): Promise<s.TagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
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
    {abortSignal, ...params}: RequestConfig & s.UntagResourceInput,
  ): Promise<s.UntagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
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

  async updateHost(
    {abortSignal, ...params}: RequestConfig & s.UpdateHostInput,
  ): Promise<s.UpdateHostOutput> {
    const body: jsonP.JSONObject = {
      HostArn: params["HostArn"],
      ProviderEndpoint: params["ProviderEndpoint"],
      VpcConfiguration: fromVpcConfiguration(params["VpcConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
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

function fromVpcConfiguration(input?: s.VpcConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    VpcId: input["VpcId"],
    SubnetIds: input["SubnetIds"],
    SecurityGroupIds: input["SecurityGroupIds"],
    TlsCertificate: input["TlsCertificate"],
  }
}
function toVpcConfiguration(root: jsonP.JSONValue): s.VpcConfiguration {
  return jsonP.readObj({
    required: {
      "VpcId": "s",
      "SubnetIds": ["s"],
      "SecurityGroupIds": ["s"],
    },
    optional: {
      "TlsCertificate": "s",
    },
  }, root);
}

function toConnection(root: jsonP.JSONValue): s.Connection {
  return jsonP.readObj({
    required: {},
    optional: {
      "ConnectionName": "s",
      "ConnectionArn": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
      "OwnerAccountId": "s",
      "ConnectionStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConnectionStatus>(x),
      "HostArn": "s",
    },
  }, root);
}

function toHost(root: jsonP.JSONValue): s.Host {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "HostArn": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
      "ProviderEndpoint": "s",
      "VpcConfiguration": toVpcConfiguration,
      "Status": "s",
      "StatusMessage": "s",
    },
  }, root);
}
