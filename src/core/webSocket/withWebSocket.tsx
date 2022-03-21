import React from 'react'
import { WebSocketContext } from './context'

export interface InjectedWebSocket {
  webSocket: WebSocket
}

export const withWebSocket = <P,>(
  Component: React.ComponentType<P>,
): React.ComponentType<P & InjectedWebSocket> => {
  const InjectedComponent = (props: P) => (
    <WebSocketContext.Consumer>
      {(webSocket) => <Component {...props} webSocket={webSocket} />}
    </WebSocketContext.Consumer>
  )
  InjectedComponent.displayName = `withWebSocket(${Component.displayName})`

  return InjectedComponent
}
