// Autogenerated API client for: Amazon Lookout for Vision

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class LookoutVision {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(LookoutVision.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2020-11-20",
    "endpointPrefix": "lookoutvision",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Amazon Lookout for Vision",
    "serviceId": "LookoutVision",
    "signatureVersion": "v4",
    "signingName": "lookoutvision",
    "uid": "lookoutvision-2020-11-20"
  };

  async createDataset(
    {abortSignal, ...params}: RequestConfig & CreateDatasetRequest,
  ): Promise<CreateDatasetResponse> {
    const headers = new Headers;
    const body: jsonP.JSONObject = {
      DatasetType: params["DatasetType"],
      DatasetSource: fromDatasetSource(params["DatasetSource"]),
    };
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "CreateDataset",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/datasets`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetMetadata": toDatasetMetadata,
      },
    }, await resp.json());
  }

  async createModel(
    {abortSignal, ...params}: RequestConfig & CreateModelRequest,
  ): Promise<CreateModelResponse> {
    const headers = new Headers;
    const body: jsonP.JSONObject = {
      Description: fromModelDescription(params["Description"]),
      OutputConfig: fromOutputConfig(params["OutputConfig"]),
      KmsKeyId: params["KmsKeyId"],
    };
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "CreateModel",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ModelMetadata": toModelMetadata,
      },
    }, await resp.json());
  }

  async createProject(
    {abortSignal, ...params}: RequestConfig & CreateProjectRequest,
  ): Promise<CreateProjectResponse> {
    const headers = new Headers;
    const body: jsonP.JSONObject = {
      ProjectName: params["ProjectName"],
    };
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "CreateProject",
      requestUri: "/2020-11-20/projects",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProjectMetadata": toProjectMetadata,
      },
    }, await resp.json());
  }

  async deleteDataset(
    {abortSignal, ...params}: RequestConfig & DeleteDatasetRequest,
  ): Promise<DeleteDatasetResponse> {
    const headers = new Headers;
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "DeleteDataset",
      method: "DELETE",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/datasets/${params["DatasetType"]}`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteModel(
    {abortSignal, ...params}: RequestConfig & DeleteModelRequest,
  ): Promise<DeleteModelResponse> {
    const headers = new Headers;
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "DeleteModel",
      method: "DELETE",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models/${params["ModelVersion"]}`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ModelArn": "s",
      },
    }, await resp.json());
  }

  async deleteProject(
    {abortSignal, ...params}: RequestConfig & DeleteProjectRequest,
  ): Promise<DeleteProjectResponse> {
    const headers = new Headers;
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "DeleteProject",
      method: "DELETE",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProjectArn": "s",
      },
    }, await resp.json());
  }

  async describeDataset(
    {abortSignal, ...params}: RequestConfig & DescribeDatasetRequest,
  ): Promise<DescribeDatasetResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeDataset",
      method: "GET",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/datasets/${params["DatasetType"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetDescription": toDatasetDescription,
      },
    }, await resp.json());
  }

  async describeModel(
    {abortSignal, ...params}: RequestConfig & DescribeModelRequest,
  ): Promise<DescribeModelResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeModel",
      method: "GET",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models/${params["ModelVersion"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ModelDescription": toModelDescription,
      },
    }, await resp.json());
  }

  async describeProject(
    {abortSignal, ...params}: RequestConfig & DescribeProjectRequest,
  ): Promise<DescribeProjectResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeProject",
      method: "GET",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProjectDescription": toProjectDescription,
      },
    }, await resp.json());
  }

  async detectAnomalies(
    {abortSignal, ...params}: RequestConfig & DetectAnomaliesRequest,
  ): Promise<DetectAnomaliesResponse> {
    const body = typeof params["Body"] === 'string' ? new TextEncoder().encode(params["Body"]) : params["Body"];
    const headers = new Headers;
    headers.append("content-type", params["ContentType"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "DetectAnomalies",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models/${params["ModelVersion"]}/detect`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DetectAnomalyResult": toDetectAnomalyResult,
      },
    }, await resp.json());
  }

  async listDatasetEntries(
    {abortSignal, ...params}: RequestConfig & ListDatasetEntriesRequest,
  ): Promise<ListDatasetEntriesResponse> {
    const query = new URLSearchParams;
    if (params["Labeled"] != null) query.set("labeled", params["Labeled"]?.toString() ?? "");
    if (params["AnomalyClass"] != null) query.set("anomalyClass", params["AnomalyClass"]?.toString() ?? "");
    if (params["BeforeCreationDate"] != null) query.set("createdBefore", cmnP.serializeDate_iso8601(params["BeforeCreationDate"]) ?? "");
    if (params["AfterCreationDate"] != null) query.set("createdAfter", cmnP.serializeDate_iso8601(params["AfterCreationDate"]) ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["SourceRefContains"] != null) query.set("sourceRefContains", params["SourceRefContains"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListDatasetEntries",
      method: "GET",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/datasets/${params["DatasetType"]}/entries`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetEntries": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listModels(
    {abortSignal, ...params}: RequestConfig & ListModelsRequest,
  ): Promise<ListModelsResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListModels",
      method: "GET",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Models": [toModelMetadata],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listProjects(
    {abortSignal, ...params}: RequestConfig & ListProjectsRequest = {},
  ): Promise<ListProjectsResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListProjects",
      method: "GET",
      requestUri: "/2020-11-20/projects",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Projects": [toProjectMetadata],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startModel(
    {abortSignal, ...params}: RequestConfig & StartModelRequest,
  ): Promise<StartModelResponse> {
    const headers = new Headers;
    const body: jsonP.JSONObject = {
      MinInferenceUnits: params["MinInferenceUnits"],
    };
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "StartModel",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models/${params["ModelVersion"]}/start`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<ModelHostingStatus>(x),
      },
    }, await resp.json());
  }

  async stopModel(
    {abortSignal, ...params}: RequestConfig & StopModelRequest,
  ): Promise<StopModelResponse> {
    const headers = new Headers;
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "StopModel",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/models/${params["ModelVersion"]}/stop`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<ModelHostingStatus>(x),
      },
    }, await resp.json());
  }

  async updateDatasetEntries(
    {abortSignal, ...params}: RequestConfig & UpdateDatasetEntriesRequest,
  ): Promise<UpdateDatasetEntriesResponse> {
    const headers = new Headers;
    const body: jsonP.JSONObject = {
      Changes: jsonP.serializeBlob(params["Changes"]),
    };
    if (params["ClientToken"] != null) headers.append("X-Amzn-Client-Token", params["ClientToken"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "UpdateDatasetEntries",
      method: "PATCH",
      requestUri: cmnP.encodePath`/2020-11-20/projects/${params["ProjectName"]}/datasets/${params["DatasetType"]}/entries`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<DatasetStatus>(x),
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateDatasetRequest {
  ProjectName: string;
  DatasetType: string;
  DatasetSource?: DatasetSource | null;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateModelRequest {
  ProjectName: string;
  Description?: ModelDescription | null;
  ClientToken?: string | null;
  OutputConfig: OutputConfig;
  KmsKeyId?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateProjectRequest {
  ProjectName: string;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteDatasetRequest {
  ProjectName: string;
  DatasetType: string;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteModelRequest {
  ProjectName: string;
  ModelVersion: string;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteProjectRequest {
  ProjectName: string;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDatasetRequest {
  ProjectName: string;
  DatasetType: string;
}

// refs: 1 - tags: named, input
export interface DescribeModelRequest {
  ProjectName: string;
  ModelVersion: string;
}

// refs: 1 - tags: named, input
export interface DescribeProjectRequest {
  ProjectName: string;
}

// refs: 1 - tags: named, input
export interface DetectAnomaliesRequest {
  ProjectName: string;
  ModelVersion: string;
  Body: Uint8Array | string;
  ContentType: string;
}

// refs: 1 - tags: named, input
export interface ListDatasetEntriesRequest {
  ProjectName: string;
  DatasetType: string;
  Labeled?: boolean | null;
  AnomalyClass?: string | null;
  BeforeCreationDate?: Date | number | null;
  AfterCreationDate?: Date | number | null;
  NextToken?: string | null;
  MaxResults?: number | null;
  SourceRefContains?: string | null;
}

// refs: 1 - tags: named, input
export interface ListModelsRequest {
  ProjectName: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListProjectsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface StartModelRequest {
  ProjectName: string;
  ModelVersion: string;
  MinInferenceUnits: number;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface StopModelRequest {
  ProjectName: string;
  ModelVersion: string;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateDatasetEntriesRequest {
  ProjectName: string;
  DatasetType: string;
  Changes: Uint8Array | string;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDatasetResponse {
  DatasetMetadata?: DatasetMetadata | null;
}

// refs: 1 - tags: named, output
export interface CreateModelResponse {
  ModelMetadata?: ModelMetadata | null;
}

// refs: 1 - tags: named, output
export interface CreateProjectResponse {
  ProjectMetadata?: ProjectMetadata | null;
}

// refs: 1 - tags: named, output
export interface DeleteDatasetResponse {
}

// refs: 1 - tags: named, output
export interface DeleteModelResponse {
  ModelArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteProjectResponse {
  ProjectArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDatasetResponse {
  DatasetDescription?: DatasetDescription | null;
}

// refs: 1 - tags: named, output
export interface DescribeModelResponse {
  ModelDescription?: ModelDescription | null;
}

// refs: 1 - tags: named, output
export interface DescribeProjectResponse {
  ProjectDescription?: ProjectDescription | null;
}

// refs: 1 - tags: named, output
export interface DetectAnomaliesResponse {
  DetectAnomalyResult?: DetectAnomalyResult | null;
}

// refs: 1 - tags: named, output
export interface ListDatasetEntriesResponse {
  DatasetEntries?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListModelsResponse {
  Models?: ModelMetadata[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListProjectsResponse {
  Projects?: ProjectMetadata[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartModelResponse {
  Status?: ModelHostingStatus | null;
}

// refs: 1 - tags: named, output
export interface StopModelResponse {
  Status?: ModelHostingStatus | null;
}

// refs: 1 - tags: named, output
export interface UpdateDatasetEntriesResponse {
  Status?: DatasetStatus | null;
}

// refs: 1 - tags: input, named, interface
export interface DatasetSource {
  GroundTruthManifest?: DatasetGroundTruthManifest | null;
}
function fromDatasetSource(input?: DatasetSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    GroundTruthManifest: fromDatasetGroundTruthManifest(input["GroundTruthManifest"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface DatasetGroundTruthManifest {
  S3Object?: InputS3Object | null;
}
function fromDatasetGroundTruthManifest(input?: DatasetGroundTruthManifest | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Object: fromInputS3Object(input["S3Object"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface InputS3Object {
  Bucket: string;
  Key: string;
  VersionId?: string | null;
}
function fromInputS3Object(input?: InputS3Object | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Bucket: input["Bucket"],
    Key: input["Key"],
    VersionId: input["VersionId"],
  }
}

// refs: 2 - tags: input, named, interface, output
export interface ModelDescription {
  ModelVersion?: string | null;
  ModelArn?: string | null;
  CreationTimestamp?: Date | number | null;
  Description?: string | null;
  Status?: ModelStatus | null;
  StatusMessage?: string | null;
  Performance?: ModelPerformance | null;
  OutputConfig?: OutputConfig | null;
  EvaluationManifest?: OutputS3Object | null;
  EvaluationResult?: OutputS3Object | null;
  EvaluationEndTimestamp?: Date | number | null;
  KmsKeyId?: string | null;
}
function fromModelDescription(input?: ModelDescription | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ModelVersion: input["ModelVersion"],
    ModelArn: input["ModelArn"],
    CreationTimestamp: jsonP.serializeDate_unixTimestamp(input["CreationTimestamp"]),
    Description: input["Description"],
    Status: input["Status"],
    StatusMessage: input["StatusMessage"],
    Performance: fromModelPerformance(input["Performance"]),
    OutputConfig: fromOutputConfig(input["OutputConfig"]),
    EvaluationManifest: fromOutputS3Object(input["EvaluationManifest"]),
    EvaluationResult: fromOutputS3Object(input["EvaluationResult"]),
    EvaluationEndTimestamp: jsonP.serializeDate_unixTimestamp(input["EvaluationEndTimestamp"]),
    KmsKeyId: input["KmsKeyId"],
  }
}
function toModelDescription(root: jsonP.JSONValue): ModelDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "ModelVersion": "s",
      "ModelArn": "s",
      "CreationTimestamp": "d",
      "Description": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<ModelStatus>(x),
      "StatusMessage": "s",
      "Performance": toModelPerformance,
      "OutputConfig": toOutputConfig,
      "EvaluationManifest": toOutputS3Object,
      "EvaluationResult": toOutputS3Object,
      "EvaluationEndTimestamp": "d",
      "KmsKeyId": "s",
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type ModelStatus =
| "TRAINING"
| "TRAINED"
| "TRAINING_FAILED"
| "STARTING_HOSTING"
| "HOSTED"
| "HOSTING_FAILED"
| "STOPPING_HOSTING"
| "SYSTEM_UPDATING"
| "DELETING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface ModelPerformance {
  F1Score?: number | null;
  Recall?: number | null;
  Precision?: number | null;
}
function fromModelPerformance(input?: ModelPerformance | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    F1Score: input["F1Score"],
    Recall: input["Recall"],
    Precision: input["Precision"],
  }
}
function toModelPerformance(root: jsonP.JSONValue): ModelPerformance {
  return jsonP.readObj({
    required: {},
    optional: {
      "F1Score": "n",
      "Recall": "n",
      "Precision": "n",
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface OutputConfig {
  S3Location: S3Location;
}
function fromOutputConfig(input?: OutputConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Location: fromS3Location(input["S3Location"]),
  }
}
function toOutputConfig(root: jsonP.JSONValue): OutputConfig {
  return jsonP.readObj({
    required: {
      "S3Location": toS3Location,
    },
    optional: {},
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface S3Location {
  Bucket: string;
  Prefix?: string | null;
}
function fromS3Location(input?: S3Location | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Bucket: input["Bucket"],
    Prefix: input["Prefix"],
  }
}
function toS3Location(root: jsonP.JSONValue): S3Location {
  return jsonP.readObj({
    required: {
      "Bucket": "s",
    },
    optional: {
      "Prefix": "s",
    },
  }, root);
}

// refs: 4 - tags: input, named, interface, output
export interface OutputS3Object {
  Bucket: string;
  Key: string;
}
function fromOutputS3Object(input?: OutputS3Object | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Bucket: input["Bucket"],
    Key: input["Key"],
  }
}
function toOutputS3Object(root: jsonP.JSONValue): OutputS3Object {
  return jsonP.readObj({
    required: {
      "Bucket": "s",
      "Key": "s",
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface DatasetMetadata {
  DatasetType?: string | null;
  CreationTimestamp?: Date | number | null;
  Status?: DatasetStatus | null;
  StatusMessage?: string | null;
}
function toDatasetMetadata(root: jsonP.JSONValue): DatasetMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "DatasetType": "s",
      "CreationTimestamp": "d",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<DatasetStatus>(x),
      "StatusMessage": "s",
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type DatasetStatus =
| "CREATE_IN_PROGRESS"
| "CREATE_COMPLETE"
| "CREATE_FAILED"
| "UPDATE_IN_PROGRESS"
| "UPDATE_COMPLETE"
| "UPDATE_FAILED_ROLLBACK_IN_PROGRESS"
| "UPDATE_FAILED_ROLLBACK_COMPLETE"
| "DELETE_IN_PROGRESS"
| "DELETE_COMPLETE"
| "DELETE_FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface ModelMetadata {
  CreationTimestamp?: Date | number | null;
  ModelVersion?: string | null;
  ModelArn?: string | null;
  Description?: string | null;
  Status?: ModelStatus | null;
  StatusMessage?: string | null;
  Performance?: ModelPerformance | null;
}
function toModelMetadata(root: jsonP.JSONValue): ModelMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "CreationTimestamp": "d",
      "ModelVersion": "s",
      "ModelArn": "s",
      "Description": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<ModelStatus>(x),
      "StatusMessage": "s",
      "Performance": toModelPerformance,
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface ProjectMetadata {
  ProjectArn?: string | null;
  ProjectName?: string | null;
  CreationTimestamp?: Date | number | null;
}
function toProjectMetadata(root: jsonP.JSONValue): ProjectMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "ProjectArn": "s",
      "ProjectName": "s",
      "CreationTimestamp": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DatasetDescription {
  ProjectName?: string | null;
  DatasetType?: string | null;
  CreationTimestamp?: Date | number | null;
  LastUpdatedTimestamp?: Date | number | null;
  Status?: DatasetStatus | null;
  StatusMessage?: string | null;
  ImageStats?: DatasetImageStats | null;
}
function toDatasetDescription(root: jsonP.JSONValue): DatasetDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "ProjectName": "s",
      "DatasetType": "s",
      "CreationTimestamp": "d",
      "LastUpdatedTimestamp": "d",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<DatasetStatus>(x),
      "StatusMessage": "s",
      "ImageStats": toDatasetImageStats,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DatasetImageStats {
  Total?: number | null;
  Labeled?: number | null;
  Normal?: number | null;
  Anomaly?: number | null;
}
function toDatasetImageStats(root: jsonP.JSONValue): DatasetImageStats {
  return jsonP.readObj({
    required: {},
    optional: {
      "Total": "n",
      "Labeled": "n",
      "Normal": "n",
      "Anomaly": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ProjectDescription {
  ProjectArn?: string | null;
  ProjectName?: string | null;
  CreationTimestamp?: Date | number | null;
  Datasets?: DatasetMetadata[] | null;
}
function toProjectDescription(root: jsonP.JSONValue): ProjectDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "ProjectArn": "s",
      "ProjectName": "s",
      "CreationTimestamp": "d",
      "Datasets": [toDatasetMetadata],
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DetectAnomalyResult {
  Source?: ImageSource | null;
  IsAnomalous?: boolean | null;
  Confidence?: number | null;
}
function toDetectAnomalyResult(root: jsonP.JSONValue): DetectAnomalyResult {
  return jsonP.readObj({
    required: {},
    optional: {
      "Source": toImageSource,
      "IsAnomalous": "b",
      "Confidence": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ImageSource {
  Type?: string | null;
}
function toImageSource(root: jsonP.JSONValue): ImageSource {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ModelHostingStatus =
| "RUNNING"
| "STARTING"
| "STOPPED"
| "FAILED"
| cmnP.UnexpectedEnumValue;