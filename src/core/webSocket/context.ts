import React, { useContext } from 'react'

export const WebSocketContext = React.createContext<WebSocket>(
  null as unknown as WebSocket,
)

export const useWebSocket = (): WebSocket => useContext(WebSocketContext)
