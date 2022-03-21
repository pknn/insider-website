import React from 'react'
import { WebSocketContext } from './context'

interface ComponentProps {
  children: JSX.Element | JSX.Element[]
}

export const WebSocketContextProvider = (props: ComponentProps) => {
  const webSocket = new WebSocket(import.meta.env.VITE_WS_URL)

  return (
    <WebSocketContext.Provider value={webSocket}>
      {props.children}
    </WebSocketContext.Provider>
  )
}
