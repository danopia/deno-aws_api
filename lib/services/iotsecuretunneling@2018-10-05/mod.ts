// Autogenerated API client for: AWS IoT Secure Tunneling

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class IoTSecureTunneling {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(IoTSecureTunneling.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-10-05",
    "endpointPrefix": "api.tunneling.iot",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS IoT Secure Tunneling",
    "serviceId": "IoTSecureTunneling",
    "signatureVersion": "v4",
    "signingName": "IoTSecuredTunneling",
    "targetPrefix": "IoTSecuredTunneling",
    "uid": "iotsecuretunneling-2018-10-05"
  };

  async closeTunnel(
    {abortSignal, ...params}: RequestConfig & s.CloseTunnelRequest,
  ): Promise<s.CloseTunnelResponse> {
    const body: jsonP.JSONObject = {
      tunnelId: params["tunnelId"],
      delete: params["delete"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CloseTunnel",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeTunnel(
    {abortSignal, ...params}: RequestConfig & s.DescribeTunnelRequest,
  ): Promise<s.DescribeTunnelResponse> {
    const body: jsonP.JSONObject = {
      tunnelId: params["tunnelId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeTunnel",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tunnel": toTunnel,
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async listTunnels(
    {abortSignal, ...params}: RequestConfig & s.ListTunnelsRequest = {},
  ): Promise<s.ListTunnelsResponse> {
    const body: jsonP.JSONObject = {
      thingName: params["thingName"],
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTunnels",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tunnelSummaries": [toTunnelSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async openTunnel(
    {abortSignal, ...params}: RequestConfig & s.OpenTunnelRequest = {},
  ): Promise<s.OpenTunnelResponse> {
    const body: jsonP.JSONObject = {
      description: params["description"],
      tags: params["tags"]?.map(x => fromTag(x)),
      destinationConfig: fromDestinationConfig(params["destinationConfig"]),
      timeoutConfig: fromTimeoutConfig(params["timeoutConfig"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "OpenTunnel",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tunnelId": "s",
        "tunnelArn": "s",
        "sourceAccessToken": "s",
        "destinationAccessToken": "s",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      tags: params["tags"]?.map(x => fromTag(x)),
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
      resourceArn: params["resourceArn"],
      tagKeys: params["tagKeys"],
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
    required: {
      "key": "s",
      "value": "s",
    },
    optional: {},
  }, root);
}

function fromDestinationConfig(input?: s.DestinationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    thingName: input["thingName"],
    services: input["services"],
  }
}
function toDestinationConfig(root: jsonP.JSONValue): s.DestinationConfig {
  return jsonP.readObj({
    required: {
      "services": ["s"],
    },
    optional: {
      "thingName": "s",
    },
  }, root);
}

function fromTimeoutConfig(input?: s.TimeoutConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    maxLifetimeTimeoutMinutes: input["maxLifetimeTimeoutMinutes"],
  }
}
function toTimeoutConfig(root: jsonP.JSONValue): s.TimeoutConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "maxLifetimeTimeoutMinutes": "n",
    },
  }, root);
}

function toTunnel(root: jsonP.JSONValue): s.Tunnel {
  return jsonP.readObj({
    required: {},
    optional: {
      "tunnelId": "s",
      "tunnelArn": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.TunnelStatus>(x),
      "sourceConnectionState": toConnectionState,
      "destinationConnectionState": toConnectionState,
      "description": "s",
      "destinationConfig": toDestinationConfig,
      "timeoutConfig": toTimeoutConfig,
      "tags": [toTag],
      "createdAt": "d",
      "lastUpdatedAt": "d",
    },
  }, root);
}

function toConnectionState(root: jsonP.JSONValue): s.ConnectionState {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConnectionStatus>(x),
      "lastUpdatedAt": "d",
    },
  }, root);
}

function toTunnelSummary(root: jsonP.JSONValue): s.TunnelSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "tunnelId": "s",
      "tunnelArn": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.TunnelStatus>(x),
      "description": "s",
      "createdAt": "d",
      "lastUpdatedAt": "d",
    },
  }, root);
}
