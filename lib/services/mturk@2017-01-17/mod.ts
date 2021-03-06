// Autogenerated API client for: Amazon Mechanical Turk

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class MTurk {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MTurk.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-01-17",
    "endpointPrefix": "mturk-requester",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "Amazon MTurk",
    "serviceFullName": "Amazon Mechanical Turk",
    "serviceId": "MTurk",
    "signatureVersion": "v4",
    "targetPrefix": "MTurkRequesterServiceV20170117",
    "uid": "mturk-requester-2017-01-17"
  };

  async acceptQualificationRequest(
    {abortSignal, ...params}: RequestConfig & s.AcceptQualificationRequestRequest,
  ): Promise<s.AcceptQualificationRequestResponse> {
    const body: jsonP.JSONObject = {
      QualificationRequestId: params["QualificationRequestId"],
      IntegerValue: params["IntegerValue"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AcceptQualificationRequest",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async approveAssignment(
    {abortSignal, ...params}: RequestConfig & s.ApproveAssignmentRequest,
  ): Promise<s.ApproveAssignmentResponse> {
    const body: jsonP.JSONObject = {
      AssignmentId: params["AssignmentId"],
      RequesterFeedback: params["RequesterFeedback"],
      OverrideRejection: params["OverrideRejection"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ApproveAssignment",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async associateQualificationWithWorker(
    {abortSignal, ...params}: RequestConfig & s.AssociateQualificationWithWorkerRequest,
  ): Promise<s.AssociateQualificationWithWorkerResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
      WorkerId: params["WorkerId"],
      IntegerValue: params["IntegerValue"],
      SendNotification: params["SendNotification"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateQualificationWithWorker",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async createAdditionalAssignmentsForHIT(
    {abortSignal, ...params}: RequestConfig & s.CreateAdditionalAssignmentsForHITRequest,
  ): Promise<s.CreateAdditionalAssignmentsForHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      NumberOfAdditionalAssignments: params["NumberOfAdditionalAssignments"],
      UniqueRequestToken: params["UniqueRequestToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateAdditionalAssignmentsForHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async createHIT(
    {abortSignal, ...params}: RequestConfig & s.CreateHITRequest,
  ): Promise<s.CreateHITResponse> {
    const body: jsonP.JSONObject = {
      MaxAssignments: params["MaxAssignments"],
      AutoApprovalDelayInSeconds: params["AutoApprovalDelayInSeconds"],
      LifetimeInSeconds: params["LifetimeInSeconds"],
      AssignmentDurationInSeconds: params["AssignmentDurationInSeconds"],
      Reward: params["Reward"],
      Title: params["Title"],
      Keywords: params["Keywords"],
      Description: params["Description"],
      Question: params["Question"],
      RequesterAnnotation: params["RequesterAnnotation"],
      QualificationRequirements: params["QualificationRequirements"]?.map(x => fromQualificationRequirement(x)),
      UniqueRequestToken: params["UniqueRequestToken"],
      AssignmentReviewPolicy: fromReviewPolicy(params["AssignmentReviewPolicy"]),
      HITReviewPolicy: fromReviewPolicy(params["HITReviewPolicy"]),
      HITLayoutId: params["HITLayoutId"],
      HITLayoutParameters: params["HITLayoutParameters"]?.map(x => fromHITLayoutParameter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HIT": toHIT,
      },
    }, await resp.json());
  }

  async createHITType(
    {abortSignal, ...params}: RequestConfig & s.CreateHITTypeRequest,
  ): Promise<s.CreateHITTypeResponse> {
    const body: jsonP.JSONObject = {
      AutoApprovalDelayInSeconds: params["AutoApprovalDelayInSeconds"],
      AssignmentDurationInSeconds: params["AssignmentDurationInSeconds"],
      Reward: params["Reward"],
      Title: params["Title"],
      Keywords: params["Keywords"],
      Description: params["Description"],
      QualificationRequirements: params["QualificationRequirements"]?.map(x => fromQualificationRequirement(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHITType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HITTypeId": "s",
      },
    }, await resp.json());
  }

  async createHITWithHITType(
    {abortSignal, ...params}: RequestConfig & s.CreateHITWithHITTypeRequest,
  ): Promise<s.CreateHITWithHITTypeResponse> {
    const body: jsonP.JSONObject = {
      HITTypeId: params["HITTypeId"],
      MaxAssignments: params["MaxAssignments"],
      LifetimeInSeconds: params["LifetimeInSeconds"],
      Question: params["Question"],
      RequesterAnnotation: params["RequesterAnnotation"],
      UniqueRequestToken: params["UniqueRequestToken"],
      AssignmentReviewPolicy: fromReviewPolicy(params["AssignmentReviewPolicy"]),
      HITReviewPolicy: fromReviewPolicy(params["HITReviewPolicy"]),
      HITLayoutId: params["HITLayoutId"],
      HITLayoutParameters: params["HITLayoutParameters"]?.map(x => fromHITLayoutParameter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHITWithHITType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HIT": toHIT,
      },
    }, await resp.json());
  }

  async createQualificationType(
    {abortSignal, ...params}: RequestConfig & s.CreateQualificationTypeRequest,
  ): Promise<s.CreateQualificationTypeResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      Keywords: params["Keywords"],
      Description: params["Description"],
      QualificationTypeStatus: params["QualificationTypeStatus"],
      RetryDelayInSeconds: params["RetryDelayInSeconds"],
      Test: params["Test"],
      AnswerKey: params["AnswerKey"],
      TestDurationInSeconds: params["TestDurationInSeconds"],
      AutoGranted: params["AutoGranted"],
      AutoGrantedValue: params["AutoGrantedValue"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateQualificationType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QualificationType": toQualificationType,
      },
    }, await resp.json());
  }

  async createWorkerBlock(
    {abortSignal, ...params}: RequestConfig & s.CreateWorkerBlockRequest,
  ): Promise<s.CreateWorkerBlockResponse> {
    const body: jsonP.JSONObject = {
      WorkerId: params["WorkerId"],
      Reason: params["Reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateWorkerBlock",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteHIT(
    {abortSignal, ...params}: RequestConfig & s.DeleteHITRequest,
  ): Promise<s.DeleteHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteQualificationType(
    {abortSignal, ...params}: RequestConfig & s.DeleteQualificationTypeRequest,
  ): Promise<s.DeleteQualificationTypeResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteQualificationType",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteWorkerBlock(
    {abortSignal, ...params}: RequestConfig & s.DeleteWorkerBlockRequest,
  ): Promise<s.DeleteWorkerBlockResponse> {
    const body: jsonP.JSONObject = {
      WorkerId: params["WorkerId"],
      Reason: params["Reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteWorkerBlock",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async disassociateQualificationFromWorker(
    {abortSignal, ...params}: RequestConfig & s.DisassociateQualificationFromWorkerRequest,
  ): Promise<s.DisassociateQualificationFromWorkerResponse> {
    const body: jsonP.JSONObject = {
      WorkerId: params["WorkerId"],
      QualificationTypeId: params["QualificationTypeId"],
      Reason: params["Reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateQualificationFromWorker",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getAccountBalance(
    {abortSignal, ...params}: RequestConfig & s.GetAccountBalanceRequest = {},
  ): Promise<s.GetAccountBalanceResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAccountBalance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AvailableBalance": "s",
        "OnHoldBalance": "s",
      },
    }, await resp.json());
  }

  async getAssignment(
    {abortSignal, ...params}: RequestConfig & s.GetAssignmentRequest,
  ): Promise<s.GetAssignmentResponse> {
    const body: jsonP.JSONObject = {
      AssignmentId: params["AssignmentId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAssignment",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Assignment": toAssignment,
        "HIT": toHIT,
      },
    }, await resp.json());
  }

  async getFileUploadURL(
    {abortSignal, ...params}: RequestConfig & s.GetFileUploadURLRequest,
  ): Promise<s.GetFileUploadURLResponse> {
    const body: jsonP.JSONObject = {
      AssignmentId: params["AssignmentId"],
      QuestionIdentifier: params["QuestionIdentifier"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetFileUploadURL",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FileUploadURL": "s",
      },
    }, await resp.json());
  }

  async getHIT(
    {abortSignal, ...params}: RequestConfig & s.GetHITRequest,
  ): Promise<s.GetHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HIT": toHIT,
      },
    }, await resp.json());
  }

  async getQualificationScore(
    {abortSignal, ...params}: RequestConfig & s.GetQualificationScoreRequest,
  ): Promise<s.GetQualificationScoreResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
      WorkerId: params["WorkerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetQualificationScore",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Qualification": toQualification,
      },
    }, await resp.json());
  }

  async getQualificationType(
    {abortSignal, ...params}: RequestConfig & s.GetQualificationTypeRequest,
  ): Promise<s.GetQualificationTypeResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetQualificationType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QualificationType": toQualificationType,
      },
    }, await resp.json());
  }

  async listAssignmentsForHIT(
    {abortSignal, ...params}: RequestConfig & s.ListAssignmentsForHITRequest,
  ): Promise<s.ListAssignmentsForHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      AssignmentStatuses: params["AssignmentStatuses"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAssignmentsForHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "NumResults": "n",
        "Assignments": [toAssignment],
      },
    }, await resp.json());
  }

  async listBonusPayments(
    {abortSignal, ...params}: RequestConfig & s.ListBonusPaymentsRequest = {},
  ): Promise<s.ListBonusPaymentsResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      AssignmentId: params["AssignmentId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListBonusPayments",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NumResults": "n",
        "NextToken": "s",
        "BonusPayments": [toBonusPayment],
      },
    }, await resp.json());
  }

  async listHITs(
    {abortSignal, ...params}: RequestConfig & s.ListHITsRequest = {},
  ): Promise<s.ListHITsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListHITs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "NumResults": "n",
        "HITs": [toHIT],
      },
    }, await resp.json());
  }

  async listHITsForQualificationType(
    {abortSignal, ...params}: RequestConfig & s.ListHITsForQualificationTypeRequest,
  ): Promise<s.ListHITsForQualificationTypeResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListHITsForQualificationType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "NumResults": "n",
        "HITs": [toHIT],
      },
    }, await resp.json());
  }

  async listQualificationRequests(
    {abortSignal, ...params}: RequestConfig & s.ListQualificationRequestsRequest = {},
  ): Promise<s.ListQualificationRequestsResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListQualificationRequests",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NumResults": "n",
        "NextToken": "s",
        "QualificationRequests": [toQualificationRequest],
      },
    }, await resp.json());
  }

  async listQualificationTypes(
    {abortSignal, ...params}: RequestConfig & s.ListQualificationTypesRequest,
  ): Promise<s.ListQualificationTypesResponse> {
    const body: jsonP.JSONObject = {
      Query: params["Query"],
      MustBeRequestable: params["MustBeRequestable"],
      MustBeOwnedByCaller: params["MustBeOwnedByCaller"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListQualificationTypes",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NumResults": "n",
        "NextToken": "s",
        "QualificationTypes": [toQualificationType],
      },
    }, await resp.json());
  }

  async listReviewPolicyResultsForHIT(
    {abortSignal, ...params}: RequestConfig & s.ListReviewPolicyResultsForHITRequest,
  ): Promise<s.ListReviewPolicyResultsForHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      PolicyLevels: params["PolicyLevels"],
      RetrieveActions: params["RetrieveActions"],
      RetrieveResults: params["RetrieveResults"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListReviewPolicyResultsForHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HITId": "s",
        "AssignmentReviewPolicy": toReviewPolicy,
        "HITReviewPolicy": toReviewPolicy,
        "AssignmentReviewReport": toReviewReport,
        "HITReviewReport": toReviewReport,
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listReviewableHITs(
    {abortSignal, ...params}: RequestConfig & s.ListReviewableHITsRequest = {},
  ): Promise<s.ListReviewableHITsResponse> {
    const body: jsonP.JSONObject = {
      HITTypeId: params["HITTypeId"],
      Status: params["Status"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListReviewableHITs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "NumResults": "n",
        "HITs": [toHIT],
      },
    }, await resp.json());
  }

  async listWorkerBlocks(
    {abortSignal, ...params}: RequestConfig & s.ListWorkerBlocksRequest = {},
  ): Promise<s.ListWorkerBlocksResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListWorkerBlocks",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "NumResults": "n",
        "WorkerBlocks": [toWorkerBlock],
      },
    }, await resp.json());
  }

  async listWorkersWithQualificationType(
    {abortSignal, ...params}: RequestConfig & s.ListWorkersWithQualificationTypeRequest,
  ): Promise<s.ListWorkersWithQualificationTypeResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
      Status: params["Status"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListWorkersWithQualificationType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "NumResults": "n",
        "Qualifications": [toQualification],
      },
    }, await resp.json());
  }

  async notifyWorkers(
    {abortSignal, ...params}: RequestConfig & s.NotifyWorkersRequest,
  ): Promise<s.NotifyWorkersResponse> {
    const body: jsonP.JSONObject = {
      Subject: params["Subject"],
      MessageText: params["MessageText"],
      WorkerIds: params["WorkerIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "NotifyWorkers",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NotifyWorkersFailureStatuses": [toNotifyWorkersFailureStatus],
      },
    }, await resp.json());
  }

  async rejectAssignment(
    {abortSignal, ...params}: RequestConfig & s.RejectAssignmentRequest,
  ): Promise<s.RejectAssignmentResponse> {
    const body: jsonP.JSONObject = {
      AssignmentId: params["AssignmentId"],
      RequesterFeedback: params["RequesterFeedback"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RejectAssignment",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async rejectQualificationRequest(
    {abortSignal, ...params}: RequestConfig & s.RejectQualificationRequestRequest,
  ): Promise<s.RejectQualificationRequestResponse> {
    const body: jsonP.JSONObject = {
      QualificationRequestId: params["QualificationRequestId"],
      Reason: params["Reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RejectQualificationRequest",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async sendBonus(
    {abortSignal, ...params}: RequestConfig & s.SendBonusRequest,
  ): Promise<s.SendBonusResponse> {
    const body: jsonP.JSONObject = {
      WorkerId: params["WorkerId"],
      BonusAmount: params["BonusAmount"],
      AssignmentId: params["AssignmentId"],
      Reason: params["Reason"],
      UniqueRequestToken: params["UniqueRequestToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendBonus",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async sendTestEventNotification(
    {abortSignal, ...params}: RequestConfig & s.SendTestEventNotificationRequest,
  ): Promise<s.SendTestEventNotificationResponse> {
    const body: jsonP.JSONObject = {
      Notification: fromNotificationSpecification(params["Notification"]),
      TestEventType: params["TestEventType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendTestEventNotification",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateExpirationForHIT(
    {abortSignal, ...params}: RequestConfig & s.UpdateExpirationForHITRequest,
  ): Promise<s.UpdateExpirationForHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      ExpireAt: jsonP.serializeDate_unixTimestamp(params["ExpireAt"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateExpirationForHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateHITReviewStatus(
    {abortSignal, ...params}: RequestConfig & s.UpdateHITReviewStatusRequest,
  ): Promise<s.UpdateHITReviewStatusResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      Revert: params["Revert"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateHITReviewStatus",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateHITTypeOfHIT(
    {abortSignal, ...params}: RequestConfig & s.UpdateHITTypeOfHITRequest,
  ): Promise<s.UpdateHITTypeOfHITResponse> {
    const body: jsonP.JSONObject = {
      HITId: params["HITId"],
      HITTypeId: params["HITTypeId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateHITTypeOfHIT",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateNotificationSettings(
    {abortSignal, ...params}: RequestConfig & s.UpdateNotificationSettingsRequest,
  ): Promise<s.UpdateNotificationSettingsResponse> {
    const body: jsonP.JSONObject = {
      HITTypeId: params["HITTypeId"],
      Notification: fromNotificationSpecification(params["Notification"]),
      Active: params["Active"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateNotificationSettings",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateQualificationType(
    {abortSignal, ...params}: RequestConfig & s.UpdateQualificationTypeRequest,
  ): Promise<s.UpdateQualificationTypeResponse> {
    const body: jsonP.JSONObject = {
      QualificationTypeId: params["QualificationTypeId"],
      Description: params["Description"],
      QualificationTypeStatus: params["QualificationTypeStatus"],
      Test: params["Test"],
      AnswerKey: params["AnswerKey"],
      TestDurationInSeconds: params["TestDurationInSeconds"],
      RetryDelayInSeconds: params["RetryDelayInSeconds"],
      AutoGranted: params["AutoGranted"],
      AutoGrantedValue: params["AutoGrantedValue"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateQualificationType",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QualificationType": toQualificationType,
      },
    }, await resp.json());
  }

}

function fromQualificationRequirement(input?: s.QualificationRequirement | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    QualificationTypeId: input["QualificationTypeId"],
    Comparator: input["Comparator"],
    IntegerValues: input["IntegerValues"],
    LocaleValues: input["LocaleValues"]?.map(x => fromLocale(x)),
    RequiredToPreview: input["RequiredToPreview"],
    ActionsGuarded: input["ActionsGuarded"],
  }
}
function toQualificationRequirement(root: jsonP.JSONValue): s.QualificationRequirement {
  return jsonP.readObj({
    required: {
      "QualificationTypeId": "s",
      "Comparator": (x: jsonP.JSONValue) => cmnP.readEnum<s.Comparator>(x),
    },
    optional: {
      "IntegerValues": ["n"],
      "LocaleValues": [toLocale],
      "RequiredToPreview": "b",
      "ActionsGuarded": (x: jsonP.JSONValue) => cmnP.readEnum<s.HITAccessActions>(x),
    },
  }, root);
}

function fromLocale(input?: s.Locale | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Country: input["Country"],
    Subdivision: input["Subdivision"],
  }
}
function toLocale(root: jsonP.JSONValue): s.Locale {
  return jsonP.readObj({
    required: {
      "Country": "s",
    },
    optional: {
      "Subdivision": "s",
    },
  }, root);
}

function fromReviewPolicy(input?: s.ReviewPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PolicyName: input["PolicyName"],
    Parameters: input["Parameters"]?.map(x => fromPolicyParameter(x)),
  }
}
function toReviewPolicy(root: jsonP.JSONValue): s.ReviewPolicy {
  return jsonP.readObj({
    required: {
      "PolicyName": "s",
    },
    optional: {
      "Parameters": [toPolicyParameter],
    },
  }, root);
}

function fromPolicyParameter(input?: s.PolicyParameter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Values: input["Values"],
    MapEntries: input["MapEntries"]?.map(x => fromParameterMapEntry(x)),
  }
}
function toPolicyParameter(root: jsonP.JSONValue): s.PolicyParameter {
  return jsonP.readObj({
    required: {},
    optional: {
      "Key": "s",
      "Values": ["s"],
      "MapEntries": [toParameterMapEntry],
    },
  }, root);
}

function fromParameterMapEntry(input?: s.ParameterMapEntry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Values: input["Values"],
  }
}
function toParameterMapEntry(root: jsonP.JSONValue): s.ParameterMapEntry {
  return jsonP.readObj({
    required: {},
    optional: {
      "Key": "s",
      "Values": ["s"],
    },
  }, root);
}

function fromHITLayoutParameter(input?: s.HITLayoutParameter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Value: input["Value"],
  }
}

function fromNotificationSpecification(input?: s.NotificationSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Destination: input["Destination"],
    Transport: input["Transport"],
    Version: input["Version"],
    EventTypes: input["EventTypes"],
  }
}

function toHIT(root: jsonP.JSONValue): s.HIT {
  return jsonP.readObj({
    required: {},
    optional: {
      "HITId": "s",
      "HITTypeId": "s",
      "HITGroupId": "s",
      "HITLayoutId": "s",
      "CreationTime": "d",
      "Title": "s",
      "Description": "s",
      "Question": "s",
      "Keywords": "s",
      "HITStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.HITStatus>(x),
      "MaxAssignments": "n",
      "Reward": "s",
      "AutoApprovalDelayInSeconds": "n",
      "Expiration": "d",
      "AssignmentDurationInSeconds": "n",
      "RequesterAnnotation": "s",
      "QualificationRequirements": [toQualificationRequirement],
      "HITReviewStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.HITReviewStatus>(x),
      "NumberOfAssignmentsPending": "n",
      "NumberOfAssignmentsAvailable": "n",
      "NumberOfAssignmentsCompleted": "n",
    },
  }, root);
}

function toQualificationType(root: jsonP.JSONValue): s.QualificationType {
  return jsonP.readObj({
    required: {},
    optional: {
      "QualificationTypeId": "s",
      "CreationTime": "d",
      "Name": "s",
      "Description": "s",
      "Keywords": "s",
      "QualificationTypeStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.QualificationTypeStatus>(x),
      "Test": "s",
      "TestDurationInSeconds": "n",
      "AnswerKey": "s",
      "RetryDelayInSeconds": "n",
      "IsRequestable": "b",
      "AutoGranted": "b",
      "AutoGrantedValue": "n",
    },
  }, root);
}

function toAssignment(root: jsonP.JSONValue): s.Assignment {
  return jsonP.readObj({
    required: {},
    optional: {
      "AssignmentId": "s",
      "WorkerId": "s",
      "HITId": "s",
      "AssignmentStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.AssignmentStatus>(x),
      "AutoApprovalTime": "d",
      "AcceptTime": "d",
      "SubmitTime": "d",
      "ApprovalTime": "d",
      "RejectionTime": "d",
      "Deadline": "d",
      "Answer": "s",
      "RequesterFeedback": "s",
    },
  }, root);
}

function toQualification(root: jsonP.JSONValue): s.Qualification {
  return jsonP.readObj({
    required: {},
    optional: {
      "QualificationTypeId": "s",
      "WorkerId": "s",
      "GrantTime": "d",
      "IntegerValue": "n",
      "LocaleValue": toLocale,
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.QualificationStatus>(x),
    },
  }, root);
}

function toBonusPayment(root: jsonP.JSONValue): s.BonusPayment {
  return jsonP.readObj({
    required: {},
    optional: {
      "WorkerId": "s",
      "BonusAmount": "s",
      "AssignmentId": "s",
      "Reason": "s",
      "GrantTime": "d",
    },
  }, root);
}

function toQualificationRequest(root: jsonP.JSONValue): s.QualificationRequest {
  return jsonP.readObj({
    required: {},
    optional: {
      "QualificationRequestId": "s",
      "QualificationTypeId": "s",
      "WorkerId": "s",
      "Test": "s",
      "Answer": "s",
      "SubmitTime": "d",
    },
  }, root);
}

function toReviewReport(root: jsonP.JSONValue): s.ReviewReport {
  return jsonP.readObj({
    required: {},
    optional: {
      "ReviewResults": [toReviewResultDetail],
      "ReviewActions": [toReviewActionDetail],
    },
  }, root);
}

function toReviewResultDetail(root: jsonP.JSONValue): s.ReviewResultDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "ActionId": "s",
      "SubjectId": "s",
      "SubjectType": "s",
      "QuestionId": "s",
      "Key": "s",
      "Value": "s",
    },
  }, root);
}

function toReviewActionDetail(root: jsonP.JSONValue): s.ReviewActionDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "ActionId": "s",
      "ActionName": "s",
      "TargetId": "s",
      "TargetType": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReviewActionStatus>(x),
      "CompleteTime": "d",
      "Result": "s",
      "ErrorCode": "s",
    },
  }, root);
}

function toWorkerBlock(root: jsonP.JSONValue): s.WorkerBlock {
  return jsonP.readObj({
    required: {},
    optional: {
      "WorkerId": "s",
      "Reason": "s",
    },
  }, root);
}

function toNotifyWorkersFailureStatus(root: jsonP.JSONValue): s.NotifyWorkersFailureStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "NotifyWorkersFailureCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.NotifyWorkersFailureCode>(x),
      "NotifyWorkersFailureMessage": "s",
      "WorkerId": "s",
    },
  }, root);
}
