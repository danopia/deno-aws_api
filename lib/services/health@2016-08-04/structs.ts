// Autogenerated API structures for: AWS Health APIs and Notifications

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface DescribeAffectedAccountsForOrganizationRequest {
  eventArn: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeAffectedEntitiesRequest {
  filter: EntityFilter;
  locale?: string | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeAffectedEntitiesForOrganizationRequest {
  organizationEntityFilters: EventAccountFilter[];
  locale?: string | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeEntityAggregatesRequest {
  eventArns?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventAggregatesRequest {
  filter?: EventFilter | null;
  aggregateField: eventAggregateField;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventDetailsRequest {
  eventArns: string[];
  locale?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventDetailsForOrganizationRequest {
  organizationEventDetailFilters: EventAccountFilter[];
  locale?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventTypesRequest {
  filter?: EventTypeFilter | null;
  locale?: string | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventsRequest {
  filter?: EventFilter | null;
  nextToken?: string | null;
  maxResults?: number | null;
  locale?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventsForOrganizationRequest {
  filter?: OrganizationEventFilter | null;
  nextToken?: string | null;
  maxResults?: number | null;
  locale?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAffectedAccountsForOrganizationResponse {
  affectedAccounts?: string[] | null;
  eventScopeCode?: eventScopeCode | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAffectedEntitiesResponse {
  entities?: AffectedEntity[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAffectedEntitiesForOrganizationResponse {
  entities?: AffectedEntity[] | null;
  failedSet?: OrganizationAffectedEntitiesErrorItem[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEntityAggregatesResponse {
  entityAggregates?: EntityAggregate[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventAggregatesResponse {
  eventAggregates?: EventAggregate[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventDetailsResponse {
  successfulSet?: EventDetails[] | null;
  failedSet?: EventDetailsErrorItem[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventDetailsForOrganizationResponse {
  successfulSet?: OrganizationEventDetails[] | null;
  failedSet?: OrganizationEventDetailsErrorItem[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventTypesResponse {
  eventTypes?: EventType[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventsResponse {
  events?: Event[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventsForOrganizationResponse {
  events?: OrganizationEvent[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeHealthServiceStatusForOrganizationResponse {
  healthServiceAccessStatusForOrganization?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface EntityFilter {
  eventArns: string[];
  entityArns?: string[] | null;
  entityValues?: string[] | null;
  lastUpdatedTimes?: DateTimeRange[] | null;
  tags?: ({ [key: string]: string | null | undefined })[] | null;
  statusCodes?: entityStatusCode[] | null;
}

// refs: 10 - tags: input, named, interface
export interface DateTimeRange {
  from?: Date | number | null;
  to?: Date | number | null;
}

// refs: 3 - tags: input, named, enum, output
export type entityStatusCode =
| "IMPAIRED"
| "UNIMPAIRED"
| "UNKNOWN"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface
export interface EventAccountFilter {
  eventArn: string;
  awsAccountId?: string | null;
}

// refs: 2 - tags: input, named, interface
export interface EventFilter {
  eventArns?: string[] | null;
  eventTypeCodes?: string[] | null;
  services?: string[] | null;
  regions?: string[] | null;
  availabilityZones?: string[] | null;
  startTimes?: DateTimeRange[] | null;
  endTimes?: DateTimeRange[] | null;
  lastUpdatedTimes?: DateTimeRange[] | null;
  entityArns?: string[] | null;
  entityValues?: string[] | null;
  eventTypeCategories?: eventTypeCategory[] | null;
  tags?: ({ [key: string]: string | null | undefined })[] | null;
  eventStatusCodes?: eventStatusCode[] | null;
}

// refs: 9 - tags: input, named, enum, output
export type eventTypeCategory =
| "issue"
| "accountNotification"
| "scheduledChange"
| "investigation"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, enum, output
export type eventStatusCode =
| "open"
| "closed"
| "upcoming"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type eventAggregateField =
| "eventTypeCategory"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface EventTypeFilter {
  eventTypeCodes?: string[] | null;
  services?: string[] | null;
  eventTypeCategories?: eventTypeCategory[] | null;
}

// refs: 1 - tags: input, named, interface
export interface OrganizationEventFilter {
  eventTypeCodes?: string[] | null;
  awsAccountIds?: string[] | null;
  services?: string[] | null;
  regions?: string[] | null;
  startTime?: DateTimeRange | null;
  endTime?: DateTimeRange | null;
  lastUpdatedTime?: DateTimeRange | null;
  entityArns?: string[] | null;
  entityValues?: string[] | null;
  eventTypeCategories?: eventTypeCategory[] | null;
  eventStatusCodes?: eventStatusCode[] | null;
}

// refs: 5 - tags: output, named, enum
export type eventScopeCode =
| "PUBLIC"
| "ACCOUNT_SPECIFIC"
| "NONE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface AffectedEntity {
  entityArn?: string | null;
  eventArn?: string | null;
  entityValue?: string | null;
  entityUrl?: string | null;
  awsAccountId?: string | null;
  lastUpdatedTime?: Date | number | null;
  statusCode?: entityStatusCode | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface OrganizationAffectedEntitiesErrorItem {
  awsAccountId?: string | null;
  eventArn?: string | null;
  errorName?: string | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface EntityAggregate {
  eventArn?: string | null;
  count?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface EventAggregate {
  aggregateValue?: string | null;
  count?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface EventDetails {
  event?: Event | null;
  eventDescription?: EventDescription | null;
  eventMetadata?: { [key: string]: string | null | undefined } | null;
}

// refs: 3 - tags: output, named, interface
export interface Event {
  arn?: string | null;
  service?: string | null;
  eventTypeCode?: string | null;
  eventTypeCategory?: eventTypeCategory | null;
  region?: string | null;
  availabilityZone?: string | null;
  startTime?: Date | number | null;
  endTime?: Date | number | null;
  lastUpdatedTime?: Date | number | null;
  statusCode?: eventStatusCode | null;
  eventScopeCode?: eventScopeCode | null;
}

// refs: 2 - tags: output, named, interface
export interface EventDescription {
  latestDescription?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface EventDetailsErrorItem {
  eventArn?: string | null;
  errorName?: string | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface OrganizationEventDetails {
  awsAccountId?: string | null;
  event?: Event | null;
  eventDescription?: EventDescription | null;
  eventMetadata?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface OrganizationEventDetailsErrorItem {
  awsAccountId?: string | null;
  eventArn?: string | null;
  errorName?: string | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface EventType {
  service?: string | null;
  code?: string | null;
  category?: eventTypeCategory | null;
}

// refs: 1 - tags: output, named, interface
export interface OrganizationEvent {
  arn?: string | null;
  service?: string | null;
  eventTypeCode?: string | null;
  eventTypeCategory?: eventTypeCategory | null;
  eventScopeCode?: eventScopeCode | null;
  region?: string | null;
  startTime?: Date | number | null;
  endTime?: Date | number | null;
  lastUpdatedTime?: Date | number | null;
  statusCode?: eventStatusCode | null;
}
