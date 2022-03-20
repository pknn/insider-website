import React from 'react'
import { WebSocketContext } from './context'

interface ComponentProps {
  children: JSX.Element | JSX.Element[]
}

export const WebSocketContextProvider = (props: ComponentProps) => (
  <WebSocketContext.Provider value={new WebSocket(import.meta.env.VITE_WS_URL)}>
    {props.children}
  </WebSocketContext.Provider>
)
