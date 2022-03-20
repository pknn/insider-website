import { Message } from 'contract/WebSocket'
import { useEffect, useRef } from 'react'

export const useWebSocket = () => {
  const webSocket = useRef<WebSocket>()

  useEffect(() => {
    webSocket.current = new WebSocket(import.meta.env.VITE_WS_URL)
    return () => {
      webSocket.current?.close()
    }
  }, [])

  const addOnMessageHandler = (
    listener: (ev: MessageEvent<Message>) => void,
  ) => {
    webSocket.current?.addEventListener('message', listener)
  }

  const addOnOpenHandler = (listener: (this: WebSocket, ev: Event) => void) => {
    webSocket.current?.addEventListener('open', listener)
  }

  const sendMessage = (message: Message) => {
    if (webSocket.current?.readyState !== WebSocket.OPEN) {
      setTimeout(() => {
        sendMessage(message)
      }, 500)
      return
    }
    webSocket.current.send(JSON.stringify(message))
  }

  return {
    addOnMessageHandler,
    addOnOpenHandler,
    sendMessage,
  }
}
