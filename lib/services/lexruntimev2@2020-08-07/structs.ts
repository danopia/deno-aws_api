// Autogenerated API structures for: Amazon Lex Runtime V2

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface DeleteSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
}

// refs: 1 - tags: named, input
export interface GetSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
}

// refs: 1 - tags: named, input
export interface PutSessionRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  messages?: Message[] | null;
  sessionState: SessionState;
  requestAttributes?: { [key: string]: string | null | undefined } | null;
  responseContentType?: string | null;
}

// refs: 1 - tags: named, input
export interface RecognizeTextRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  text: string;
  sessionState?: SessionState | null;
  requestAttributes?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface RecognizeUtteranceRequest {
  botId: string;
  botAliasId: string;
  localeId: string;
  sessionId: string;
  sessionState?: string | null;
  requestAttributes?: string | null;
  requestContentType: string;
  responseContentType?: string | null;
  inputStream?: Uint8Array | string | null;
}

// refs: 1 - tags: named, output
export interface DeleteSessionResponse {
  botId?: string | null;
  botAliasId?: string | null;
  localeId?: string | null;
  sessionId?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSessionResponse {
  sessionId?: string | null;
  messages?: Message[] | null;
  interpretations?: Interpretation[] | null;
  sessionState?: SessionState | null;
}

// refs: 1 - tags: named, output
export interface PutSessionResponse {
  contentType?: string | null;
  messages?: string | null;
  sessionState?: string | null;
  requestAttributes?: string | null;
  sessionId?: string | null;
  audioStream?: Uint8Array | string | null;
}

// refs: 1 - tags: named, output
export interface RecognizeTextResponse {
  messages?: Message[] | null;
  sessionState?: SessionState | null;
  interpretations?: Interpretation[] | null;
  requestAttributes?: { [key: string]: string | null | undefined } | null;
  sessionId?: string | null;
}

// refs: 1 - tags: named, output
export interface RecognizeUtteranceResponse {
  inputMode?: string | null;
  contentType?: string | null;
  messages?: string | null;
  interpretations?: string | null;
  sessionState?: string | null;
  requestAttributes?: string | null;
  sessionId?: string | null;
  inputTranscript?: string | null;
  audioStream?: Uint8Array | string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Message {
  content?: string | null;
  contentType?: MessageContentType | null;
  imageResponseCard?: ImageResponseCard | null;
}

// refs: 3 - tags: input, named, enum, output
export type MessageContentType =
| "CustomPayload"
| "ImageResponseCard"
| "PlainText"
| "SSML"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ImageResponseCard {
  title: string;
  subtitle?: string | null;
  imageUrl?: string | null;
  buttons?: Button[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Button {
  text: string;
  value: string;
}

// refs: 4 - tags: input, named, interface, output
export interface SessionState {
  dialogAction?: DialogAction | null;
  intent?: Intent | null;
  activeContexts?: ActiveContext[] | null;
  sessionAttributes?: { [key: string]: string | null | undefined } | null;
  originatingRequestId?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DialogAction {
  type: DialogActionType;
  slotToElicit?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type DialogActionType =
| "Close"
| "ConfirmIntent"
| "Delegate"
| "ElicitIntent"
| "ElicitSlot"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface Intent {
  name: string;
  slots?: { [key: string]: Slot | null | undefined } | null;
  state?: IntentState | null;
  confirmationState?: ConfirmationState | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Slot {
  value?: Value | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Value {
  originalValue?: string | null;
  interpretedValue: string;
  resolvedValues?: string[] | null;
}

// refs: 6 - tags: input, named, enum, output
export type IntentState =
| "Failed"
| "Fulfilled"
| "InProgress"
| "ReadyForFulfillment"
| "Waiting"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type ConfirmationState =
| "Confirmed"
| "Denied"
| "None"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface ActiveContext {
  name: string;
  timeToLive: ActiveContextTimeToLive;
  contextAttributes?: { [key: string]: string | null | undefined } | null;
}

// refs: 4 - tags: input, named, interface, output
export interface ActiveContextTimeToLive {
  timeToLiveInSeconds: number;
  turnsToLive: number;
}

// refs: 2 - tags: output, named, interface
export interface Interpretation {
  nluConfidence?: ConfidenceScore | null;
  sentimentResponse?: SentimentResponse | null;
  intent?: Intent | null;
}

// refs: 2 - tags: output, named, interface
export interface ConfidenceScore {
  score?: number | null;
}

// refs: 2 - tags: output, named, interface
export interface SentimentResponse {
  sentiment?: SentimentType | null;
  sentimentScore?: SentimentScore | null;
}

// refs: 2 - tags: output, named, enum
export type SentimentType =
| "MIXED"
| "NEGATIVE"
| "NEUTRAL"
| "POSITIVE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface SentimentScore {
  positive?: number | null;
  negative?: number | null;
  neutral?: number | null;
  mixed?: number | null;
}
