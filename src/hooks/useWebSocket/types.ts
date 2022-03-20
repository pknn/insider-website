import { Message } from '../../contract/WebSocket'

export type OnOpenHandler = () => void
export type OnMessageHandler = (message: Message) => void
