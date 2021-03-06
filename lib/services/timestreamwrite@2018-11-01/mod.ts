// Autogenerated API client for: Amazon Timestream Write

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class TimestreamWrite {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(TimestreamWrite.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-11-01",
    "endpointPrefix": "ingest.timestream",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "Timestream Write",
    "serviceFullName": "Amazon Timestream Write",
    "serviceId": "Timestream Write",
    "signatureVersion": "v4",
    "signingName": "timestream",
    "targetPrefix": "Timestream_20181101",
    "uid": "timestream-write-2018-11-01"
  };

  async createDatabase(
    {abortSignal, ...params}: RequestConfig & s.CreateDatabaseRequest,
  ): Promise<s.CreateDatabaseResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      KmsKeyId: params["KmsKeyId"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDatabase",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Database": toDatabase,
      },
    }, await resp.json());
  }

  async createTable(
    {abortSignal, ...params}: RequestConfig & s.CreateTableRequest,
  ): Promise<s.CreateTableResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      TableName: params["TableName"],
      RetentionProperties: fromRetentionProperties(params["RetentionProperties"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateTable",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Table": toTable,
      },
    }, await resp.json());
  }

  async deleteDatabase(
    {abortSignal, ...params}: RequestConfig & s.DeleteDatabaseRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteDatabase",
    });
  }

  async deleteTable(
    {abortSignal, ...params}: RequestConfig & s.DeleteTableRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      TableName: params["TableName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteTable",
    });
  }

  async describeDatabase(
    {abortSignal, ...params}: RequestConfig & s.DescribeDatabaseRequest,
  ): Promise<s.DescribeDatabaseResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDatabase",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Database": toDatabase,
      },
    }, await resp.json());
  }

  async describeEndpoints(
    {abortSignal, ...params}: RequestConfig & s.DescribeEndpointsRequest = {},
  ): Promise<s.DescribeEndpointsResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEndpoints",
    });
    return jsonP.readObj({
      required: {
        "Endpoints": [toEndpoint],
      },
      optional: {},
    }, await resp.json());
  }

  async describeTable(
    {abortSignal, ...params}: RequestConfig & s.DescribeTableRequest,
  ): Promise<s.DescribeTableResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      TableName: params["TableName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeTable",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Table": toTable,
      },
    }, await resp.json());
  }

  async listDatabases(
    {abortSignal, ...params}: RequestConfig & s.ListDatabasesRequest = {},
  ): Promise<s.ListDatabasesResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDatabases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Databases": [toDatabase],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTables(
    {abortSignal, ...params}: RequestConfig & s.ListTablesRequest = {},
  ): Promise<s.ListTablesResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTables",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tables": [toTable],
        "NextToken": "s",
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

  async updateDatabase(
    {abortSignal, ...params}: RequestConfig & s.UpdateDatabaseRequest,
  ): Promise<s.UpdateDatabaseResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      KmsKeyId: params["KmsKeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDatabase",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Database": toDatabase,
      },
    }, await resp.json());
  }

  async updateTable(
    {abortSignal, ...params}: RequestConfig & s.UpdateTableRequest,
  ): Promise<s.UpdateTableResponse> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      TableName: params["TableName"],
      RetentionProperties: fromRetentionProperties(params["RetentionProperties"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateTable",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Table": toTable,
      },
    }, await resp.json());
  }

  async writeRecords(
    {abortSignal, ...params}: RequestConfig & s.WriteRecordsRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      DatabaseName: params["DatabaseName"],
      TableName: params["TableName"],
      CommonAttributes: fromRecord(params["CommonAttributes"]),
      Records: params["Records"]?.map(x => fromRecord(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "WriteRecords",
    });
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

function fromRetentionProperties(input?: s.RetentionProperties | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MemoryStoreRetentionPeriodInHours: input["MemoryStoreRetentionPeriodInHours"],
    MagneticStoreRetentionPeriodInDays: input["MagneticStoreRetentionPeriodInDays"],
  }
}
function toRetentionProperties(root: jsonP.JSONValue): s.RetentionProperties {
  return jsonP.readObj({
    required: {
      "MemoryStoreRetentionPeriodInHours": "n",
      "MagneticStoreRetentionPeriodInDays": "n",
    },
    optional: {},
  }, root);
}

function fromRecord(input?: s.Record | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Dimensions: input["Dimensions"]?.map(x => fromDimension(x)),
    MeasureName: input["MeasureName"],
    MeasureValue: input["MeasureValue"],
    MeasureValueType: input["MeasureValueType"],
    Time: input["Time"],
    TimeUnit: input["TimeUnit"],
    Version: input["Version"],
  }
}

function fromDimension(input?: s.Dimension | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Value: input["Value"],
    DimensionValueType: input["DimensionValueType"],
  }
}

function toDatabase(root: jsonP.JSONValue): s.Database {
  return jsonP.readObj({
    required: {},
    optional: {
      "Arn": "s",
      "DatabaseName": "s",
      "TableCount": "n",
      "KmsKeyId": "s",
      "CreationTime": "d",
      "LastUpdatedTime": "d",
    },
  }, root);
}

function toTable(root: jsonP.JSONValue): s.Table {
  return jsonP.readObj({
    required: {},
    optional: {
      "Arn": "s",
      "TableName": "s",
      "DatabaseName": "s",
      "TableStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.TableStatus>(x),
      "RetentionProperties": toRetentionProperties,
      "CreationTime": "d",
      "LastUpdatedTime": "d",
    },
  }, root);
}

function toEndpoint(root: jsonP.JSONValue): s.Endpoint {
  return jsonP.readObj({
    required: {
      "Address": "s",
      "CachePeriodInMinutes": "n",
    },
    optional: {},
  }, root);
}
