// Autogenerated API client for: Amazon Kinesis Video Streams

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class KinesisVideo {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(KinesisVideo.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-09-30",
    "endpointPrefix": "kinesisvideo",
    "protocol": "rest-json",
    "serviceAbbreviation": "Kinesis Video",
    "serviceFullName": "Amazon Kinesis Video Streams",
    "serviceId": "Kinesis Video",
    "signatureVersion": "v4",
    "uid": "kinesisvideo-2017-09-30"
  };

  async createSignalingChannel(
    {abortSignal, ...params}: RequestConfig & s.CreateSignalingChannelInput,
  ): Promise<s.CreateSignalingChannelOutput> {
    const body: jsonP.JSONObject = {
      ChannelName: params["ChannelName"],
      ChannelType: params["ChannelType"],
      SingleMasterConfiguration: fromSingleMasterConfiguration(params["SingleMasterConfiguration"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateSignalingChannel",
      requestUri: "/createSignalingChannel",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ChannelARN": "s",
      },
    }, await resp.json());
  }

  async createStream(
    {abortSignal, ...params}: RequestConfig & s.CreateStreamInput,
  ): Promise<s.CreateStreamOutput> {
    const body: jsonP.JSONObject = {
      DeviceName: params["DeviceName"],
      StreamName: params["StreamName"],
      MediaType: params["MediaType"],
      KmsKeyId: params["KmsKeyId"],
      DataRetentionInHours: params["DataRetentionInHours"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateStream",
      requestUri: "/createStream",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamARN": "s",
      },
    }, await resp.json());
  }

  async deleteSignalingChannel(
    {abortSignal, ...params}: RequestConfig & s.DeleteSignalingChannelInput,
  ): Promise<s.DeleteSignalingChannelOutput> {
    const body: jsonP.JSONObject = {
      ChannelARN: params["ChannelARN"],
      CurrentVersion: params["CurrentVersion"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteSignalingChannel",
      requestUri: "/deleteSignalingChannel",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteStream(
    {abortSignal, ...params}: RequestConfig & s.DeleteStreamInput,
  ): Promise<s.DeleteStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      CurrentVersion: params["CurrentVersion"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteStream",
      requestUri: "/deleteStream",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeSignalingChannel(
    {abortSignal, ...params}: RequestConfig & s.DescribeSignalingChannelInput = {},
  ): Promise<s.DescribeSignalingChannelOutput> {
    const body: jsonP.JSONObject = {
      ChannelName: params["ChannelName"],
      ChannelARN: params["ChannelARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeSignalingChannel",
      requestUri: "/describeSignalingChannel",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ChannelInfo": toChannelInfo,
      },
    }, await resp.json());
  }

  async describeStream(
    {abortSignal, ...params}: RequestConfig & s.DescribeStreamInput = {},
  ): Promise<s.DescribeStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      StreamARN: params["StreamARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStream",
      requestUri: "/describeStream",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamInfo": toStreamInfo,
      },
    }, await resp.json());
  }

  async getDataEndpoint(
    {abortSignal, ...params}: RequestConfig & s.GetDataEndpointInput,
  ): Promise<s.GetDataEndpointOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      StreamARN: params["StreamARN"],
      APIName: params["APIName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDataEndpoint",
      requestUri: "/getDataEndpoint",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DataEndpoint": "s",
      },
    }, await resp.json());
  }

  async getSignalingChannelEndpoint(
    {abortSignal, ...params}: RequestConfig & s.GetSignalingChannelEndpointInput,
  ): Promise<s.GetSignalingChannelEndpointOutput> {
    const body: jsonP.JSONObject = {
      ChannelARN: params["ChannelARN"],
      SingleMasterChannelEndpointConfiguration: fromSingleMasterChannelEndpointConfiguration(params["SingleMasterChannelEndpointConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetSignalingChannelEndpoint",
      requestUri: "/getSignalingChannelEndpoint",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResourceEndpointList": [toResourceEndpointListItem],
      },
    }, await resp.json());
  }

  async listSignalingChannels(
    {abortSignal, ...params}: RequestConfig & s.ListSignalingChannelsInput = {},
  ): Promise<s.ListSignalingChannelsOutput> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      ChannelNameCondition: fromChannelNameCondition(params["ChannelNameCondition"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListSignalingChannels",
      requestUri: "/listSignalingChannels",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ChannelInfoList": [toChannelInfo],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listStreams(
    {abortSignal, ...params}: RequestConfig & s.ListStreamsInput = {},
  ): Promise<s.ListStreamsOutput> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      StreamNameCondition: fromStreamNameCondition(params["StreamNameCondition"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListStreams",
      requestUri: "/listStreams",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamInfoList": [toStreamInfo],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceInput,
  ): Promise<s.ListTagsForResourceOutput> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      ResourceARN: params["ResourceARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
      requestUri: "/ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listTagsForStream(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForStreamInput = {},
  ): Promise<s.ListTagsForStreamOutput> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      StreamARN: params["StreamARN"],
      StreamName: params["StreamName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForStream",
      requestUri: "/listTagsForStream",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceInput,
  ): Promise<s.TagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: "/TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async tagStream(
    {abortSignal, ...params}: RequestConfig & s.TagStreamInput,
  ): Promise<s.TagStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      StreamName: params["StreamName"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagStream",
      requestUri: "/tagStream",
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
      ResourceARN: params["ResourceARN"],
      TagKeyList: params["TagKeyList"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
      requestUri: "/UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagStream(
    {abortSignal, ...params}: RequestConfig & s.UntagStreamInput,
  ): Promise<s.UntagStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      StreamName: params["StreamName"],
      TagKeyList: params["TagKeyList"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagStream",
      requestUri: "/untagStream",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateDataRetention(
    {abortSignal, ...params}: RequestConfig & s.UpdateDataRetentionInput,
  ): Promise<s.UpdateDataRetentionOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      StreamARN: params["StreamARN"],
      CurrentVersion: params["CurrentVersion"],
      Operation: params["Operation"],
      DataRetentionChangeInHours: params["DataRetentionChangeInHours"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDataRetention",
      requestUri: "/updateDataRetention",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateSignalingChannel(
    {abortSignal, ...params}: RequestConfig & s.UpdateSignalingChannelInput,
  ): Promise<s.UpdateSignalingChannelOutput> {
    const body: jsonP.JSONObject = {
      ChannelARN: params["ChannelARN"],
      CurrentVersion: params["CurrentVersion"],
      SingleMasterConfiguration: fromSingleMasterConfiguration(params["SingleMasterConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateSignalingChannel",
      requestUri: "/updateSignalingChannel",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateStream(
    {abortSignal, ...params}: RequestConfig & s.UpdateStreamInput,
  ): Promise<s.UpdateStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      StreamARN: params["StreamARN"],
      CurrentVersion: params["CurrentVersion"],
      DeviceName: params["DeviceName"],
      MediaType: params["MediaType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateStream",
      requestUri: "/updateStream",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromSingleMasterConfiguration(input?: s.SingleMasterConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MessageTtlSeconds: input["MessageTtlSeconds"],
  }
}
function toSingleMasterConfiguration(root: jsonP.JSONValue): s.SingleMasterConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "MessageTtlSeconds": "n",
    },
  }, root);
}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}

function fromSingleMasterChannelEndpointConfiguration(input?: s.SingleMasterChannelEndpointConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Protocols: input["Protocols"],
    Role: input["Role"],
  }
}

function fromChannelNameCondition(input?: s.ChannelNameCondition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ComparisonOperator: input["ComparisonOperator"],
    ComparisonValue: input["ComparisonValue"],
  }
}

function fromStreamNameCondition(input?: s.StreamNameCondition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ComparisonOperator: input["ComparisonOperator"],
    ComparisonValue: input["ComparisonValue"],
  }
}

function toChannelInfo(root: jsonP.JSONValue): s.ChannelInfo {
  return jsonP.readObj({
    required: {},
    optional: {
      "ChannelName": "s",
      "ChannelARN": "s",
      "ChannelType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ChannelType>(x),
      "ChannelStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
      "CreationTime": "d",
      "SingleMasterConfiguration": toSingleMasterConfiguration,
      "Version": "s",
    },
  }, root);
}

function toStreamInfo(root: jsonP.JSONValue): s.StreamInfo {
  return jsonP.readObj({
    required: {},
    optional: {
      "DeviceName": "s",
      "StreamName": "s",
      "StreamARN": "s",
      "MediaType": "s",
      "KmsKeyId": "s",
      "Version": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
      "CreationTime": "d",
      "DataRetentionInHours": "n",
    },
  }, root);
}

function toResourceEndpointListItem(root: jsonP.JSONValue): s.ResourceEndpointListItem {
  return jsonP.readObj({
    required: {},
    optional: {
      "Protocol": (x: jsonP.JSONValue) => cmnP.readEnum<s.ChannelProtocol>(x),
      "ResourceEndpoint": "s",
    },
  }, root);
}
