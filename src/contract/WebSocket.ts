export enum MessageTopic {
  Lobby = 'Lobby',
}

export type MessagePayload = { [k: string]: unknown }

export interface Message {
  topic: MessageTopic
  payload: MessagePayload
}
