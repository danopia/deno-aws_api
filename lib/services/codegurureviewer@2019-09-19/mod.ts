// Autogenerated API client for: Amazon CodeGuru Reviewer

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.86.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class CodeGuruReviewer {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CodeGuruReviewer.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-09-19",
    "endpointPrefix": "codeguru-reviewer",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "CodeGuruReviewer",
    "serviceFullName": "Amazon CodeGuru Reviewer",
    "serviceId": "CodeGuru Reviewer",
    "signatureVersion": "v4",
    "signingName": "codeguru-reviewer",
    "uid": "codeguru-reviewer-2019-09-19"
  };

  async associateRepository(
    {abortSignal, ...params}: RequestConfig & AssociateRepositoryRequest,
  ): Promise<AssociateRepositoryResponse> {
    const body: jsonP.JSONObject = {
      Repository: fromRepository(params["Repository"]),
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateRepository",
      requestUri: "/associations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociation": toRepositoryAssociation,
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async createCodeReview(
    {abortSignal, ...params}: RequestConfig & CreateCodeReviewRequest,
  ): Promise<CreateCodeReviewResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      RepositoryAssociationArn: params["RepositoryAssociationArn"],
      Type: fromCodeReviewType(params["Type"]),
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateCodeReview",
      requestUri: "/codereviews",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CodeReview": toCodeReview,
      },
    }, await resp.json());
  }

  async describeCodeReview(
    {abortSignal, ...params}: RequestConfig & DescribeCodeReviewRequest,
  ): Promise<DescribeCodeReviewResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeCodeReview",
      method: "GET",
      requestUri: cmnP.encodePath`/codereviews/${params["CodeReviewArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CodeReview": toCodeReview,
      },
    }, await resp.json());
  }

  async describeRecommendationFeedback(
    {abortSignal, ...params}: RequestConfig & DescribeRecommendationFeedbackRequest,
  ): Promise<DescribeRecommendationFeedbackResponse> {
    const query = new URLSearchParams;
    query.set("RecommendationId", params["RecommendationId"]?.toString() ?? "");
    if (params["UserId"] != null) query.set("UserId", params["UserId"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeRecommendationFeedback",
      method: "GET",
      requestUri: cmnP.encodePath`/feedback/${params["CodeReviewArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RecommendationFeedback": toRecommendationFeedback,
      },
    }, await resp.json());
  }

  async describeRepositoryAssociation(
    {abortSignal, ...params}: RequestConfig & DescribeRepositoryAssociationRequest,
  ): Promise<DescribeRepositoryAssociationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeRepositoryAssociation",
      method: "GET",
      requestUri: cmnP.encodePath`/associations/${params["AssociationArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociation": toRepositoryAssociation,
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async disassociateRepository(
    {abortSignal, ...params}: RequestConfig & DisassociateRepositoryRequest,
  ): Promise<DisassociateRepositoryResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DisassociateRepository",
      method: "DELETE",
      requestUri: cmnP.encodePath`/associations/${params["AssociationArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociation": toRepositoryAssociation,
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listCodeReviews(
    {abortSignal, ...params}: RequestConfig & ListCodeReviewsRequest,
  ): Promise<ListCodeReviewsResponse> {
    const query = new URLSearchParams;
    for (const item of params["ProviderTypes"] ?? []) {
      query.append("ProviderTypes", item?.toString() ?? "");
    }
    for (const item of params["States"] ?? []) {
      query.append("States", item?.toString() ?? "");
    }
    for (const item of params["RepositoryNames"] ?? []) {
      query.append("RepositoryNames", item?.toString() ?? "");
    }
    query.set("Type", params["Type"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListCodeReviews",
      method: "GET",
      requestUri: "/codereviews",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CodeReviewSummaries": [toCodeReviewSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRecommendationFeedback(
    {abortSignal, ...params}: RequestConfig & ListRecommendationFeedbackRequest,
  ): Promise<ListRecommendationFeedbackResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    for (const item of params["UserIds"] ?? []) {
      query.append("UserIds", item?.toString() ?? "");
    }
    for (const item of params["RecommendationIds"] ?? []) {
      query.append("RecommendationIds", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRecommendationFeedback",
      method: "GET",
      requestUri: cmnP.encodePath`/feedback/${params["CodeReviewArn"]}/RecommendationFeedback`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RecommendationFeedbackSummaries": [toRecommendationFeedbackSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRecommendations(
    {abortSignal, ...params}: RequestConfig & ListRecommendationsRequest,
  ): Promise<ListRecommendationsResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRecommendations",
      method: "GET",
      requestUri: cmnP.encodePath`/codereviews/${params["CodeReviewArn"]}/Recommendations`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RecommendationSummaries": [toRecommendationSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRepositoryAssociations(
    {abortSignal, ...params}: RequestConfig & ListRepositoryAssociationsRequest = {},
  ): Promise<ListRepositoryAssociationsResponse> {
    const query = new URLSearchParams;
    for (const item of params["ProviderTypes"] ?? []) {
      query.append("ProviderType", item?.toString() ?? "");
    }
    for (const item of params["States"] ?? []) {
      query.append("State", item?.toString() ?? "");
    }
    for (const item of params["Names"] ?? []) {
      query.append("Name", item?.toString() ?? "");
    }
    for (const item of params["Owners"] ?? []) {
      query.append("Owner", item?.toString() ?? "");
    }
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRepositoryAssociations",
      method: "GET",
      requestUri: "/associations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociationSummaries": [toRepositoryAssociationSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async putRecommendationFeedback(
    {abortSignal, ...params}: RequestConfig & PutRecommendationFeedbackRequest,
  ): Promise<PutRecommendationFeedbackResponse> {
    const body: jsonP.JSONObject = {
      CodeReviewArn: params["CodeReviewArn"],
      RecommendationId: params["RecommendationId"],
      Reactions: params["Reactions"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutRecommendationFeedback",
      method: "PUT",
      requestUri: "/feedback",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: jsonP.JSONObject = {
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["TagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AssociateRepositoryRequest {
  Repository: Repository;
  ClientRequestToken?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateCodeReviewRequest {
  Name: string;
  RepositoryAssociationArn: string;
  Type: CodeReviewType;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeCodeReviewRequest {
  CodeReviewArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeRecommendationFeedbackRequest {
  CodeReviewArn: string;
  RecommendationId: string;
  UserId?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeRepositoryAssociationRequest {
  AssociationArn: string;
}

// refs: 1 - tags: named, input
export interface DisassociateRepositoryRequest {
  AssociationArn: string;
}

// refs: 1 - tags: named, input
export interface ListCodeReviewsRequest {
  ProviderTypes?: ProviderType[] | null;
  States?: JobState[] | null;
  RepositoryNames?: string[] | null;
  Type: Type;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListRecommendationFeedbackRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
  CodeReviewArn: string;
  UserIds?: string[] | null;
  RecommendationIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface ListRecommendationsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
  CodeReviewArn: string;
}

// refs: 1 - tags: named, input
export interface ListRepositoryAssociationsRequest {
  ProviderTypes?: ProviderType[] | null;
  States?: RepositoryAssociationState[] | null;
  Names?: string[] | null;
  Owners?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface PutRecommendationFeedbackRequest {
  CodeReviewArn: string;
  RecommendationId: string;
  Reactions: Reaction[];
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  Tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, output
export interface AssociateRepositoryResponse {
  RepositoryAssociation?: RepositoryAssociation | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface CreateCodeReviewResponse {
  CodeReview?: CodeReview | null;
}

// refs: 1 - tags: named, output
export interface DescribeCodeReviewResponse {
  CodeReview?: CodeReview | null;
}

// refs: 1 - tags: named, output
export interface DescribeRecommendationFeedbackResponse {
  RecommendationFeedback?: RecommendationFeedback | null;
}

// refs: 1 - tags: named, output
export interface DescribeRepositoryAssociationResponse {
  RepositoryAssociation?: RepositoryAssociation | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DisassociateRepositoryResponse {
  RepositoryAssociation?: RepositoryAssociation | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListCodeReviewsResponse {
  CodeReviewSummaries?: CodeReviewSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRecommendationFeedbackResponse {
  RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRecommendationsResponse {
  RecommendationSummaries?: RecommendationSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRepositoryAssociationsResponse {
  RepositoryAssociationSummaries?: RepositoryAssociationSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface PutRecommendationFeedbackResponse {
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: input, named, interface
export interface Repository {
  CodeCommit?: CodeCommitRepository | null;
  Bitbucket?: ThirdPartySourceRepository | null;
  GitHubEnterpriseServer?: ThirdPartySourceRepository | null;
}
function fromRepository(input?: Repository | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CodeCommit: fromCodeCommitRepository(input["CodeCommit"]),
    Bitbucket: fromThirdPartySourceRepository(input["Bitbucket"]),
    GitHubEnterpriseServer: fromThirdPartySourceRepository(input["GitHubEnterpriseServer"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface CodeCommitRepository {
  Name: string;
}
function fromCodeCommitRepository(input?: CodeCommitRepository | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
  }
}

// refs: 2 - tags: input, named, interface
export interface ThirdPartySourceRepository {
  Name: string;
  ConnectionArn: string;
  Owner: string;
}
function fromThirdPartySourceRepository(input?: ThirdPartySourceRepository | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    ConnectionArn: input["ConnectionArn"],
    Owner: input["Owner"],
  }
}

// refs: 1 - tags: input, named, interface
export interface CodeReviewType {
  RepositoryAnalysis: RepositoryAnalysis;
}
function fromCodeReviewType(input?: CodeReviewType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RepositoryAnalysis: fromRepositoryAnalysis(input["RepositoryAnalysis"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface RepositoryAnalysis {
  RepositoryHead: RepositoryHeadSourceCodeType;
}
function fromRepositoryAnalysis(input?: RepositoryAnalysis | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RepositoryHead: fromRepositoryHeadSourceCodeType(input["RepositoryHead"]),
  }
}

// refs: 3 - tags: input, named, interface, output
export interface RepositoryHeadSourceCodeType {
  BranchName: string;
}
function fromRepositoryHeadSourceCodeType(input?: RepositoryHeadSourceCodeType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    BranchName: input["BranchName"],
  }
}
function toRepositoryHeadSourceCodeType(root: jsonP.JSONValue): RepositoryHeadSourceCodeType {
  return jsonP.readObj({
    required: {
      "BranchName": "s",
    },
    optional: {},
  }, root);
}

// refs: 9 - tags: input, named, enum, output
export type ProviderType =
| "CodeCommit"
| "GitHub"
| "Bitbucket"
| "GitHubEnterpriseServer"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type JobState =
| "Completed"
| "Pending"
| "Failed"
| "Deleting"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type Type =
| "PullRequest"
| "RepositoryAnalysis"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, enum, output
export type RepositoryAssociationState =
| "Associated"
| "Associating"
| "Failed"
| "Disassociating"
| "Disassociated"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type Reaction =
| "ThumbsUp"
| "ThumbsDown"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface RepositoryAssociation {
  AssociationId?: string | null;
  AssociationArn?: string | null;
  ConnectionArn?: string | null;
  Name?: string | null;
  Owner?: string | null;
  ProviderType?: ProviderType | null;
  State?: RepositoryAssociationState | null;
  StateReason?: string | null;
  LastUpdatedTimeStamp?: Date | number | null;
  CreatedTimeStamp?: Date | number | null;
}
function toRepositoryAssociation(root: jsonP.JSONValue): RepositoryAssociation {
  return jsonP.readObj({
    required: {},
    optional: {
      "AssociationId": "s",
      "AssociationArn": "s",
      "ConnectionArn": "s",
      "Name": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<RepositoryAssociationState>(x),
      "StateReason": "s",
      "LastUpdatedTimeStamp": "d",
      "CreatedTimeStamp": "d",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface CodeReview {
  Name?: string | null;
  CodeReviewArn?: string | null;
  RepositoryName?: string | null;
  Owner?: string | null;
  ProviderType?: ProviderType | null;
  State?: JobState | null;
  StateReason?: string | null;
  CreatedTimeStamp?: Date | number | null;
  LastUpdatedTimeStamp?: Date | number | null;
  Type?: Type | null;
  PullRequestId?: string | null;
  SourceCodeType?: SourceCodeType | null;
  AssociationArn?: string | null;
  Metrics?: Metrics | null;
}
function toCodeReview(root: jsonP.JSONValue): CodeReview {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "CodeReviewArn": "s",
      "RepositoryName": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<JobState>(x),
      "StateReason": "s",
      "CreatedTimeStamp": "d",
      "LastUpdatedTimeStamp": "d",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<Type>(x),
      "PullRequestId": "s",
      "SourceCodeType": toSourceCodeType,
      "AssociationArn": "s",
      "Metrics": toMetrics,
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface SourceCodeType {
  CommitDiff?: CommitDiffSourceCodeType | null;
  RepositoryHead?: RepositoryHeadSourceCodeType | null;
}
function toSourceCodeType(root: jsonP.JSONValue): SourceCodeType {
  return jsonP.readObj({
    required: {},
    optional: {
      "CommitDiff": toCommitDiffSourceCodeType,
      "RepositoryHead": toRepositoryHeadSourceCodeType,
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface CommitDiffSourceCodeType {
  SourceCommit?: string | null;
  DestinationCommit?: string | null;
}
function toCommitDiffSourceCodeType(root: jsonP.JSONValue): CommitDiffSourceCodeType {
  return jsonP.readObj({
    required: {},
    optional: {
      "SourceCommit": "s",
      "DestinationCommit": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface Metrics {
  MeteredLinesOfCodeCount?: number | null;
  FindingsCount?: number | null;
}
function toMetrics(root: jsonP.JSONValue): Metrics {
  return jsonP.readObj({
    required: {},
    optional: {
      "MeteredLinesOfCodeCount": "n",
      "FindingsCount": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RecommendationFeedback {
  CodeReviewArn?: string | null;
  RecommendationId?: string | null;
  Reactions?: Reaction[] | null;
  UserId?: string | null;
  CreatedTimeStamp?: Date | number | null;
  LastUpdatedTimeStamp?: Date | number | null;
}
function toRecommendationFeedback(root: jsonP.JSONValue): RecommendationFeedback {
  return jsonP.readObj({
    required: {},
    optional: {
      "CodeReviewArn": "s",
      "RecommendationId": "s",
      "Reactions": [(x: jsonP.JSONValue) => cmnP.readEnum<Reaction>(x)],
      "UserId": "s",
      "CreatedTimeStamp": "d",
      "LastUpdatedTimeStamp": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface CodeReviewSummary {
  Name?: string | null;
  CodeReviewArn?: string | null;
  RepositoryName?: string | null;
  Owner?: string | null;
  ProviderType?: ProviderType | null;
  State?: JobState | null;
  CreatedTimeStamp?: Date | number | null;
  LastUpdatedTimeStamp?: Date | number | null;
  Type?: Type | null;
  PullRequestId?: string | null;
  MetricsSummary?: MetricsSummary | null;
}
function toCodeReviewSummary(root: jsonP.JSONValue): CodeReviewSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "CodeReviewArn": "s",
      "RepositoryName": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<JobState>(x),
      "CreatedTimeStamp": "d",
      "LastUpdatedTimeStamp": "d",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<Type>(x),
      "PullRequestId": "s",
      "MetricsSummary": toMetricsSummary,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface MetricsSummary {
  MeteredLinesOfCodeCount?: number | null;
  FindingsCount?: number | null;
}
function toMetricsSummary(root: jsonP.JSONValue): MetricsSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "MeteredLinesOfCodeCount": "n",
      "FindingsCount": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RecommendationFeedbackSummary {
  RecommendationId?: string | null;
  Reactions?: Reaction[] | null;
  UserId?: string | null;
}
function toRecommendationFeedbackSummary(root: jsonP.JSONValue): RecommendationFeedbackSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "RecommendationId": "s",
      "Reactions": [(x: jsonP.JSONValue) => cmnP.readEnum<Reaction>(x)],
      "UserId": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RecommendationSummary {
  FilePath?: string | null;
  RecommendationId?: string | null;
  StartLine?: number | null;
  EndLine?: number | null;
  Description?: string | null;
}
function toRecommendationSummary(root: jsonP.JSONValue): RecommendationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "FilePath": "s",
      "RecommendationId": "s",
      "StartLine": "n",
      "EndLine": "n",
      "Description": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RepositoryAssociationSummary {
  AssociationArn?: string | null;
  ConnectionArn?: string | null;
  LastUpdatedTimeStamp?: Date | number | null;
  AssociationId?: string | null;
  Name?: string | null;
  Owner?: string | null;
  ProviderType?: ProviderType | null;
  State?: RepositoryAssociationState | null;
}
function toRepositoryAssociationSummary(root: jsonP.JSONValue): RepositoryAssociationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "AssociationArn": "s",
      "ConnectionArn": "s",
      "LastUpdatedTimeStamp": "d",
      "AssociationId": "s",
      "Name": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<RepositoryAssociationState>(x),
    },
  }, root);
}