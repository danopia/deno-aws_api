// Autogenerated API structures for: Amazon Detective

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AcceptInvitationRequest {
  GraphArn: string;
}

// refs: 1 - tags: named, input
export interface CreateMembersRequest {
  GraphArn: string;
  Message?: string | null;
  Accounts: Account[];
}

// refs: 1 - tags: named, input
export interface DeleteGraphRequest {
  GraphArn: string;
}

// refs: 1 - tags: named, input
export interface DeleteMembersRequest {
  GraphArn: string;
  AccountIds: string[];
}

// refs: 1 - tags: named, input
export interface DisassociateMembershipRequest {
  GraphArn: string;
}

// refs: 1 - tags: named, input
export interface GetMembersRequest {
  GraphArn: string;
  AccountIds: string[];
}

// refs: 1 - tags: named, input
export interface ListGraphsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListInvitationsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListMembersRequest {
  GraphArn: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface RejectInvitationRequest {
  GraphArn: string;
}

// refs: 1 - tags: named, input
export interface StartMonitoringMemberRequest {
  GraphArn: string;
  AccountId: string;
}

// refs: 1 - tags: named, output
export interface CreateGraphResponse {
  GraphArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateMembersResponse {
  Members?: MemberDetail[] | null;
  UnprocessedAccounts?: UnprocessedAccount[] | null;
}

// refs: 1 - tags: named, output
export interface DeleteMembersResponse {
  AccountIds?: string[] | null;
  UnprocessedAccounts?: UnprocessedAccount[] | null;
}

// refs: 1 - tags: named, output
export interface GetMembersResponse {
  MemberDetails?: MemberDetail[] | null;
  UnprocessedAccounts?: UnprocessedAccount[] | null;
}

// refs: 1 - tags: named, output
export interface ListGraphsResponse {
  GraphList?: Graph[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListInvitationsResponse {
  Invitations?: MemberDetail[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListMembersResponse {
  MemberDetails?: MemberDetail[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface Account {
  AccountId: string;
  EmailAddress: string;
}

// refs: 4 - tags: output, named, interface
export interface MemberDetail {
  AccountId?: string | null;
  EmailAddress?: string | null;
  GraphArn?: string | null;
  MasterId?: string | null;
  Status?: MemberStatus | null;
  DisabledReason?: MemberDisabledReason | null;
  InvitedTime?: Date | number | null;
  UpdatedTime?: Date | number | null;
  PercentOfGraphUtilization?: number | null;
  PercentOfGraphUtilizationUpdatedTime?: Date | number | null;
}

// refs: 4 - tags: output, named, enum
export type MemberStatus =
| "INVITED"
| "VERIFICATION_IN_PROGRESS"
| "VERIFICATION_FAILED"
| "ENABLED"
| "ACCEPTED_BUT_DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, enum
export type MemberDisabledReason =
| "VOLUME_TOO_HIGH"
| "VOLUME_UNKNOWN"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface UnprocessedAccount {
  AccountId?: string | null;
  Reason?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Graph {
  Arn?: string | null;
  CreatedTime?: Date | number | null;
}
