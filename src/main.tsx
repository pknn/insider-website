import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { WebSocketContextProvider } from './core/webSocket'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <WebSocketContextProvider>
      <App />
    </WebSocketContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
