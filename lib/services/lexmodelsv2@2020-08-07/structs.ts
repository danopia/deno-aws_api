// Autogenerated API structures for: Amazon Lex Model Building V2

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface BuildBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface CreateBotRequest {
  botName: string;
  description?: string | null;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  idleSessionTTLInSeconds: number;
  botTags?: { [key: string]: string | null | undefined } | null;
  testBotAliasTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateBotAliasRequest {
  botAliasName: string;
  description?: string | null;
  botVersion?: string | null;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | null | undefined } | null;
  conversationLogSettings?: ConversationLogSettings | null;
  sentimentAnalysisSettings?: SentimentAnalysisSettings | null;
  botId: string;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  description?: string | null;
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings | null;
}

// refs: 1 - tags: named, input
export interface CreateBotVersionRequest {
  botId: string;
  description?: string | null;
  botVersionLocaleSpecification: { [key: string]: BotVersionLocaleDetails | null | undefined };
}

// refs: 1 - tags: named, input
export interface CreateIntentRequest {
  intentName: string;
  description?: string | null;
  parentIntentSignature?: string | null;
  sampleUtterances?: SampleUtterance[] | null;
  dialogCodeHook?: DialogCodeHookSettings | null;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | null;
  intentConfirmationSetting?: IntentConfirmationSetting | null;
  intentClosingSetting?: IntentClosingSetting | null;
  inputContexts?: InputContext[] | null;
  outputContexts?: OutputContext[] | null;
  kendraConfiguration?: KendraConfiguration | null;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface CreateSlotRequest {
  slotName: string;
  description?: string | null;
  slotTypeId: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting | null;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}

// refs: 1 - tags: named, input
export interface CreateSlotTypeRequest {
  slotTypeName: string;
  description?: string | null;
  slotTypeValues?: SlotTypeValue[] | null;
  valueSelectionSetting: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string | null;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface DeleteBotRequest {
  botId: string;
  skipResourceInUseCheck?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteBotAliasRequest {
  botAliasId: string;
  botId: string;
  skipResourceInUseCheck?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface DeleteBotVersionRequest {
  botId: string;
  botVersion: string;
  skipResourceInUseCheck?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteIntentRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSlotRequest {
  slotId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSlotTypeRequest {
  slotTypeId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  skipResourceInUseCheck?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeBotRequest {
  botId: string;
}

// refs: 1 - tags: named, input
export interface DescribeBotAliasRequest {
  botAliasId: string;
  botId: string;
}

// refs: 1 - tags: named, input
export interface DescribeBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface DescribeBotVersionRequest {
  botId: string;
  botVersion: string;
}

// refs: 1 - tags: named, input
export interface DescribeIntentRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface DescribeSlotRequest {
  slotId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}

// refs: 1 - tags: named, input
export interface DescribeSlotTypeRequest {
  slotTypeId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface ListBotAliasesRequest {
  botId: string;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListBotLocalesRequest {
  botId: string;
  botVersion: string;
  sortBy?: BotLocaleSortBy | null;
  filters?: BotLocaleFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListBotVersionsRequest {
  botId: string;
  sortBy?: BotVersionSortBy | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListBotsRequest {
  sortBy?: BotSortBy | null;
  filters?: BotFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListBuiltInIntentsRequest {
  localeId: string;
  sortBy?: BuiltInIntentSortBy | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListBuiltInSlotTypesRequest {
  localeId: string;
  sortBy?: BuiltInSlotTypeSortBy | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListIntentsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: IntentSortBy | null;
  filters?: IntentFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListSlotTypesRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: SlotTypeSortBy | null;
  filters?: SlotTypeFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListSlotsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  sortBy?: SlotSortBy | null;
  filters?: SlotFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceARN: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceARN: string;
  tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateBotRequest {
  botId: string;
  botName: string;
  description?: string | null;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  idleSessionTTLInSeconds: number;
}

// refs: 1 - tags: named, input
export interface UpdateBotAliasRequest {
  botAliasId: string;
  botAliasName: string;
  description?: string | null;
  botVersion?: string | null;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | null | undefined } | null;
  conversationLogSettings?: ConversationLogSettings | null;
  sentimentAnalysisSettings?: SentimentAnalysisSettings | null;
  botId: string;
}

// refs: 1 - tags: named, input
export interface UpdateBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  description?: string | null;
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings | null;
}

// refs: 1 - tags: named, input
export interface UpdateIntentRequest {
  intentId: string;
  intentName: string;
  description?: string | null;
  parentIntentSignature?: string | null;
  sampleUtterances?: SampleUtterance[] | null;
  dialogCodeHook?: DialogCodeHookSettings | null;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | null;
  slotPriorities?: SlotPriority[] | null;
  intentConfirmationSetting?: IntentConfirmationSetting | null;
  intentClosingSetting?: IntentClosingSetting | null;
  inputContexts?: InputContext[] | null;
  outputContexts?: OutputContext[] | null;
  kendraConfiguration?: KendraConfiguration | null;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, input
export interface UpdateSlotRequest {
  slotId: string;
  slotName: string;
  description?: string | null;
  slotTypeId: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting | null;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}

// refs: 1 - tags: named, input
export interface UpdateSlotTypeRequest {
  slotTypeId: string;
  slotTypeName: string;
  description?: string | null;
  slotTypeValues?: SlotTypeValue[] | null;
  valueSelectionSetting: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string | null;
  botId: string;
  botVersion: string;
  localeId: string;
}

// refs: 1 - tags: named, output
export interface BuildBotLocaleResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  botLocaleStatus?: BotLocaleStatus | null;
  lastBuildSubmittedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface CreateBotResponse {
  botId?: string | null;
  botName?: string | null;
  description?: string | null;
  roleArn?: string | null;
  dataPrivacy?: DataPrivacy | null;
  idleSessionTTLInSeconds?: number | null;
  botStatus?: BotStatus | null;
  creationDateTime?: Date | number | null;
  botTags?: { [key: string]: string | null | undefined } | null;
  testBotAliasTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface CreateBotAliasResponse {
  botAliasId?: string | null;
  botAliasName?: string | null;
  description?: string | null;
  botVersion?: string | null;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | null | undefined } | null;
  conversationLogSettings?: ConversationLogSettings | null;
  sentimentAnalysisSettings?: SentimentAnalysisSettings | null;
  botAliasStatus?: BotAliasStatus | null;
  botId?: string | null;
  creationDateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface CreateBotLocaleResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeName?: string | null;
  localeId?: string | null;
  description?: string | null;
  nluIntentConfidenceThreshold?: number | null;
  voiceSettings?: VoiceSettings | null;
  botLocaleStatus?: BotLocaleStatus | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface CreateBotVersionResponse {
  botId?: string | null;
  description?: string | null;
  botVersion?: string | null;
  botVersionLocaleSpecification?: { [key: string]: BotVersionLocaleDetails | null | undefined } | null;
  botStatus?: BotStatus | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface CreateIntentResponse {
  intentId?: string | null;
  intentName?: string | null;
  description?: string | null;
  parentIntentSignature?: string | null;
  sampleUtterances?: SampleUtterance[] | null;
  dialogCodeHook?: DialogCodeHookSettings | null;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | null;
  intentConfirmationSetting?: IntentConfirmationSetting | null;
  intentClosingSetting?: IntentClosingSetting | null;
  inputContexts?: InputContext[] | null;
  outputContexts?: OutputContext[] | null;
  kendraConfiguration?: KendraConfiguration | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface CreateSlotResponse {
  slotId?: string | null;
  slotName?: string | null;
  description?: string | null;
  slotTypeId?: string | null;
  valueElicitationSetting?: SlotValueElicitationSetting | null;
  obfuscationSetting?: ObfuscationSetting | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  intentId?: string | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface CreateSlotTypeResponse {
  slotTypeId?: string | null;
  slotTypeName?: string | null;
  description?: string | null;
  slotTypeValues?: SlotTypeValue[] | null;
  valueSelectionSetting?: SlotValueSelectionSetting | null;
  parentSlotTypeSignature?: string | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DeleteBotResponse {
  botId?: string | null;
  botStatus?: BotStatus | null;
}

// refs: 1 - tags: named, output
export interface DeleteBotAliasResponse {
  botAliasId?: string | null;
  botId?: string | null;
  botAliasStatus?: BotAliasStatus | null;
}

// refs: 1 - tags: named, output
export interface DeleteBotLocaleResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  botLocaleStatus?: BotLocaleStatus | null;
}

// refs: 1 - tags: named, output
export interface DeleteBotVersionResponse {
  botId?: string | null;
  botVersion?: string | null;
  botStatus?: BotStatus | null;
}

// refs: 1 - tags: named, output
export interface DescribeBotResponse {
  botId?: string | null;
  botName?: string | null;
  description?: string | null;
  roleArn?: string | null;
  dataPrivacy?: DataPrivacy | null;
  idleSessionTTLInSeconds?: number | null;
  botStatus?: BotStatus | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeBotAliasResponse {
  botAliasId?: string | null;
  botAliasName?: string | null;
  description?: string | null;
  botVersion?: string | null;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | null | undefined } | null;
  conversationLogSettings?: ConversationLogSettings | null;
  sentimentAnalysisSettings?: SentimentAnalysisSettings | null;
  botAliasHistoryEvents?: BotAliasHistoryEvent[] | null;
  botAliasStatus?: BotAliasStatus | null;
  botId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeBotLocaleResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  localeName?: string | null;
  description?: string | null;
  nluIntentConfidenceThreshold?: number | null;
  voiceSettings?: VoiceSettings | null;
  intentsCount?: number | null;
  slotTypesCount?: number | null;
  botLocaleStatus?: BotLocaleStatus | null;
  failureReasons?: string[] | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
  lastBuildSubmittedDateTime?: Date | number | null;
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeBotVersionResponse {
  botId?: string | null;
  botName?: string | null;
  botVersion?: string | null;
  description?: string | null;
  roleArn?: string | null;
  dataPrivacy?: DataPrivacy | null;
  idleSessionTTLInSeconds?: number | null;
  botStatus?: BotStatus | null;
  failureReasons?: string[] | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeIntentResponse {
  intentId?: string | null;
  intentName?: string | null;
  description?: string | null;
  parentIntentSignature?: string | null;
  sampleUtterances?: SampleUtterance[] | null;
  dialogCodeHook?: DialogCodeHookSettings | null;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | null;
  slotPriorities?: SlotPriority[] | null;
  intentConfirmationSetting?: IntentConfirmationSetting | null;
  intentClosingSetting?: IntentClosingSetting | null;
  inputContexts?: InputContext[] | null;
  outputContexts?: OutputContext[] | null;
  kendraConfiguration?: KendraConfiguration | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeSlotResponse {
  slotId?: string | null;
  slotName?: string | null;
  description?: string | null;
  slotTypeId?: string | null;
  valueElicitationSetting?: SlotValueElicitationSetting | null;
  obfuscationSetting?: ObfuscationSetting | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  intentId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeSlotTypeResponse {
  slotTypeId?: string | null;
  slotTypeName?: string | null;
  description?: string | null;
  slotTypeValues?: SlotTypeValue[] | null;
  valueSelectionSetting?: SlotValueSelectionSetting | null;
  parentSlotTypeSignature?: string | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface ListBotAliasesResponse {
  botAliasSummaries?: BotAliasSummary[] | null;
  nextToken?: string | null;
  botId?: string | null;
}

// refs: 1 - tags: named, output
export interface ListBotLocalesResponse {
  botId?: string | null;
  botVersion?: string | null;
  nextToken?: string | null;
  botLocaleSummaries?: BotLocaleSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListBotVersionsResponse {
  botId?: string | null;
  botVersionSummaries?: BotVersionSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListBotsResponse {
  botSummaries?: BotSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListBuiltInIntentsResponse {
  builtInIntentSummaries?: BuiltInIntentSummary[] | null;
  nextToken?: string | null;
  localeId?: string | null;
}

// refs: 1 - tags: named, output
export interface ListBuiltInSlotTypesResponse {
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[] | null;
  nextToken?: string | null;
  localeId?: string | null;
}

// refs: 1 - tags: named, output
export interface ListIntentsResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  intentSummaries?: IntentSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListSlotTypesResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  slotTypeSummaries?: SlotTypeSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListSlotsResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  intentId?: string | null;
  slotSummaries?: SlotSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateBotResponse {
  botId?: string | null;
  botName?: string | null;
  description?: string | null;
  roleArn?: string | null;
  dataPrivacy?: DataPrivacy | null;
  idleSessionTTLInSeconds?: number | null;
  botStatus?: BotStatus | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface UpdateBotAliasResponse {
  botAliasId?: string | null;
  botAliasName?: string | null;
  description?: string | null;
  botVersion?: string | null;
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings | null | undefined } | null;
  conversationLogSettings?: ConversationLogSettings | null;
  sentimentAnalysisSettings?: SentimentAnalysisSettings | null;
  botAliasStatus?: BotAliasStatus | null;
  botId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface UpdateBotLocaleResponse {
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  localeName?: string | null;
  description?: string | null;
  nluIntentConfidenceThreshold?: number | null;
  voiceSettings?: VoiceSettings | null;
  botLocaleStatus?: BotLocaleStatus | null;
  failureReasons?: string[] | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface UpdateIntentResponse {
  intentId?: string | null;
  intentName?: string | null;
  description?: string | null;
  parentIntentSignature?: string | null;
  sampleUtterances?: SampleUtterance[] | null;
  dialogCodeHook?: DialogCodeHookSettings | null;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | null;
  slotPriorities?: SlotPriority[] | null;
  intentConfirmationSetting?: IntentConfirmationSetting | null;
  intentClosingSetting?: IntentClosingSetting | null;
  inputContexts?: InputContext[] | null;
  outputContexts?: OutputContext[] | null;
  kendraConfiguration?: KendraConfiguration | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface UpdateSlotResponse {
  slotId?: string | null;
  slotName?: string | null;
  description?: string | null;
  slotTypeId?: string | null;
  valueElicitationSetting?: SlotValueElicitationSetting | null;
  obfuscationSetting?: ObfuscationSetting | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  intentId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface UpdateSlotTypeResponse {
  slotTypeId?: string | null;
  slotTypeName?: string | null;
  description?: string | null;
  slotTypeValues?: SlotTypeValue[] | null;
  valueSelectionSetting?: SlotValueSelectionSetting | null;
  parentSlotTypeSignature?: string | null;
  botId?: string | null;
  botVersion?: string | null;
  localeId?: string | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 6 - tags: input, named, interface, output
export interface DataPrivacy {
  childDirected: boolean;
}

// refs: 5 - tags: input, named, interface, output
export interface BotAliasLocaleSettings {
  enabled: boolean;
  codeHookSpecification?: CodeHookSpecification | null;
}

// refs: 5 - tags: input, named, interface, output
export interface CodeHookSpecification {
  lambdaCodeHook: LambdaCodeHook;
}

// refs: 5 - tags: input, named, interface, output
export interface LambdaCodeHook {
  lambdaARN: string;
  codeHookInterfaceVersion: string;
}

// refs: 5 - tags: input, named, interface, output
export interface ConversationLogSettings {
  textLogSettings?: TextLogSetting[] | null;
  audioLogSettings?: AudioLogSetting[] | null;
}

// refs: 5 - tags: input, named, interface, output
export interface TextLogSetting {
  enabled: boolean;
  destination: TextLogDestination;
}

// refs: 5 - tags: input, named, interface, output
export interface TextLogDestination {
  cloudWatch: CloudWatchLogGroupLogDestination;
}

// refs: 5 - tags: input, named, interface, output
export interface CloudWatchLogGroupLogDestination {
  cloudWatchLogGroupArn: string;
  logPrefix: string;
}

// refs: 5 - tags: input, named, interface, output
export interface AudioLogSetting {
  enabled: boolean;
  destination: AudioLogDestination;
}

// refs: 5 - tags: input, named, interface, output
export interface AudioLogDestination {
  s3Bucket: S3BucketLogDestination;
}

// refs: 5 - tags: input, named, interface, output
export interface S3BucketLogDestination {
  kmsKeyArn?: string | null;
  s3BucketArn: string;
  logPrefix: string;
}

// refs: 5 - tags: input, named, interface, output
export interface SentimentAnalysisSettings {
  detectSentiment: boolean;
}

// refs: 5 - tags: input, named, interface, output
export interface VoiceSettings {
  voiceId: string;
}

// refs: 2 - tags: input, named, interface, output
export interface BotVersionLocaleDetails {
  sourceBotVersion: string;
}

// refs: 10 - tags: input, named, interface, output
export interface SampleUtterance {
  utterance: string;
}

// refs: 5 - tags: input, named, interface, output
export interface DialogCodeHookSettings {
  enabled: boolean;
}

// refs: 5 - tags: input, named, interface, output
export interface FulfillmentCodeHookSettings {
  enabled: boolean;
}

// refs: 5 - tags: input, named, interface, output
export interface IntentConfirmationSetting {
  promptSpecification: PromptSpecification;
  declinationResponse: ResponseSpecification;
}

// refs: 11 - tags: input, named, interface, output
export interface PromptSpecification {
  messageGroups: MessageGroup[];
  maxRetries: number;
  allowInterrupt?: boolean | null;
}

// refs: 36 - tags: input, named, interface, output
export interface MessageGroup {
  message: Message;
  variations?: Message[] | null;
}

// refs: 72 - tags: input, named, interface, output
export interface Message {
  plainTextMessage?: PlainTextMessage | null;
  customPayload?: CustomPayload | null;
  ssmlMessage?: SSMLMessage | null;
  imageResponseCard?: ImageResponseCard | null;
}

// refs: 72 - tags: input, named, interface, output
export interface PlainTextMessage {
  value: string;
}

// refs: 72 - tags: input, named, interface, output
export interface CustomPayload {
  value: string;
}

// refs: 72 - tags: input, named, interface, output
export interface SSMLMessage {
  value: string;
}

// refs: 72 - tags: input, named, interface, output
export interface ImageResponseCard {
  title: string;
  subtitle?: string | null;
  imageUrl?: string | null;
  buttons?: Button[] | null;
}

// refs: 72 - tags: input, named, interface, output
export interface Button {
  text: string;
  value: string;
}

// refs: 20 - tags: input, named, interface, output
export interface ResponseSpecification {
  messageGroups: MessageGroup[];
  allowInterrupt?: boolean | null;
}

// refs: 5 - tags: input, named, interface, output
export interface IntentClosingSetting {
  closingResponse: ResponseSpecification;
}

// refs: 6 - tags: input, named, interface, output
export interface InputContext {
  name: string;
}

// refs: 6 - tags: input, named, interface, output
export interface OutputContext {
  name: string;
  timeToLiveInSeconds: number;
  turnsToLive: number;
}

// refs: 5 - tags: input, named, interface, output
export interface KendraConfiguration {
  kendraIndex: string;
  queryFilterStringEnabled?: boolean | null;
  queryFilterString?: string | null;
}

// refs: 5 - tags: input, named, interface, output
export interface SlotValueElicitationSetting {
  defaultValueSpecification?: SlotDefaultValueSpecification | null;
  slotConstraint: SlotConstraint;
  promptSpecification?: PromptSpecification | null;
  sampleUtterances?: SampleUtterance[] | null;
  waitAndContinueSpecification?: WaitAndContinueSpecification | null;
}

// refs: 5 - tags: input, named, interface, output
export interface SlotDefaultValueSpecification {
  defaultValueList: SlotDefaultValue[];
}

// refs: 5 - tags: input, named, interface, output
export interface SlotDefaultValue {
  defaultValue: string;
}

// refs: 6 - tags: input, named, enum, output
export type SlotConstraint =
| "Required"
| "Optional"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, interface, output
export interface WaitAndContinueSpecification {
  waitingResponse: ResponseSpecification;
  continueResponse: ResponseSpecification;
  stillWaitingResponse?: StillWaitingResponseSpecification | null;
}

// refs: 5 - tags: input, named, interface, output
export interface StillWaitingResponseSpecification {
  messageGroups: MessageGroup[];
  frequencyInSeconds: number;
  timeoutInSeconds: number;
  allowInterrupt?: boolean | null;
}

// refs: 5 - tags: input, named, interface, output
export interface ObfuscationSetting {
  obfuscationSettingType: ObfuscationSettingType;
}

// refs: 5 - tags: input, named, enum, output
export type ObfuscationSettingType =
| "None"
| "DefaultObfuscation"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, interface, output
export interface SlotTypeValue {
  sampleValue?: SampleValue | null;
  synonyms?: SampleValue[] | null;
}

// refs: 10 - tags: input, named, interface, output
export interface SampleValue {
  value: string;
}

// refs: 5 - tags: input, named, interface, output
export interface SlotValueSelectionSetting {
  resolutionStrategy: SlotValueResolutionStrategy;
  regexFilter?: SlotValueRegexFilter | null;
}

// refs: 5 - tags: input, named, enum, output
export type SlotValueResolutionStrategy =
| "OriginalValue"
| "TopResolution"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, interface, output
export interface SlotValueRegexFilter {
  pattern: string;
}

// refs: 1 - tags: input, named, interface
export interface BotLocaleSortBy {
  attribute: BotLocaleSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type BotLocaleSortAttribute =
| "BotLocaleName"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: input, named, enum
export type SortOrder =
| "Ascending"
| "Descending"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface BotLocaleFilter {
  name: BotLocaleFilterName;
  values: string[];
  operator: BotLocaleFilterOperator;
}

// refs: 1 - tags: input, named, enum
export type BotLocaleFilterName =
| "BotLocaleName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type BotLocaleFilterOperator =
| "CO"
| "EQ"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface BotVersionSortBy {
  attribute: BotVersionSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type BotVersionSortAttribute =
| "BotVersion"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface BotSortBy {
  attribute: BotSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type BotSortAttribute =
| "BotName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface BotFilter {
  name: BotFilterName;
  values: string[];
  operator: BotFilterOperator;
}

// refs: 1 - tags: input, named, enum
export type BotFilterName =
| "BotName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type BotFilterOperator =
| "CO"
| "EQ"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface BuiltInIntentSortBy {
  attribute: BuiltInIntentSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type BuiltInIntentSortAttribute =
| "IntentSignature"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface BuiltInSlotTypeSortBy {
  attribute: BuiltInSlotTypeSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type BuiltInSlotTypeSortAttribute =
| "SlotTypeSignature"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface IntentSortBy {
  attribute: IntentSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type IntentSortAttribute =
| "IntentName"
| "LastUpdatedDateTime"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface IntentFilter {
  name: IntentFilterName;
  values: string[];
  operator: IntentFilterOperator;
}

// refs: 1 - tags: input, named, enum
export type IntentFilterName =
| "IntentName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type IntentFilterOperator =
| "CO"
| "EQ"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SlotTypeSortBy {
  attribute: SlotTypeSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type SlotTypeSortAttribute =
| "SlotTypeName"
| "LastUpdatedDateTime"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SlotTypeFilter {
  name: SlotTypeFilterName;
  values: string[];
  operator: SlotTypeFilterOperator;
}

// refs: 1 - tags: input, named, enum
export type SlotTypeFilterName =
| "SlotTypeName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SlotTypeFilterOperator =
| "CO"
| "EQ"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SlotSortBy {
  attribute: SlotSortAttribute;
  order: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type SlotSortAttribute =
| "SlotName"
| "LastUpdatedDateTime"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SlotFilter {
  name: SlotFilterName;
  values: string[];
  operator: SlotFilterOperator;
}

// refs: 1 - tags: input, named, enum
export type SlotFilterName =
| "SlotName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SlotFilterOperator =
| "CO"
| "EQ"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SlotPriority {
  priority: number;
  slotId: string;
}

// refs: 6 - tags: output, named, enum
export type BotLocaleStatus =
| "Creating"
| "Building"
| "Built"
| "ReadyExpressTesting"
| "Failed"
| "Deleting"
| "NotBuilt"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: output, named, enum
export type BotStatus =
| "Creating"
| "Available"
| "Inactive"
| "Deleting"
| "Failed"
| "Versioning"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, enum
export type BotAliasStatus =
| "Creating"
| "Available"
| "Deleting"
| "Failed"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface BotAliasHistoryEvent {
  botVersion?: string | null;
  startDate?: Date | number | null;
  endDate?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface BotLocaleHistoryEvent {
  event: string;
  eventDate: Date | number;
}

// refs: 1 - tags: output, named, interface
export interface BotAliasSummary {
  botAliasId?: string | null;
  botAliasName?: string | null;
  description?: string | null;
  botVersion?: string | null;
  botAliasStatus?: BotAliasStatus | null;
  creationDateTime?: Date | number | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface BotLocaleSummary {
  localeId?: string | null;
  localeName?: string | null;
  description?: string | null;
  botLocaleStatus?: BotLocaleStatus | null;
  lastUpdatedDateTime?: Date | number | null;
  lastBuildSubmittedDateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface BotVersionSummary {
  botName?: string | null;
  botVersion?: string | null;
  description?: string | null;
  botStatus?: BotStatus | null;
  creationDateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface BotSummary {
  botId?: string | null;
  botName?: string | null;
  description?: string | null;
  botStatus?: BotStatus | null;
  latestBotVersion?: string | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface BuiltInIntentSummary {
  intentSignature?: string | null;
  description?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface BuiltInSlotTypeSummary {
  slotTypeSignature?: string | null;
  description?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface IntentSummary {
  intentId?: string | null;
  intentName?: string | null;
  description?: string | null;
  parentIntentSignature?: string | null;
  inputContexts?: InputContext[] | null;
  outputContexts?: OutputContext[] | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface SlotTypeSummary {
  slotTypeId?: string | null;
  slotTypeName?: string | null;
  description?: string | null;
  parentSlotTypeSignature?: string | null;
  lastUpdatedDateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface SlotSummary {
  slotId?: string | null;
  slotName?: string | null;
  description?: string | null;
  slotConstraint?: SlotConstraint | null;
  slotTypeId?: string | null;
  valueElicitationPromptSpecification?: PromptSpecification | null;
  lastUpdatedDateTime?: Date | number | null;
}