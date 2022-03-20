import { InjectedWebSocket, withWebSocket } from './core/webSocket'

const App = (props: InjectedWebSocket) => {
  const handleClick = () => {
    props.webSocket.send('hello')
  }
  return (
    <div>
      <div>Vite React App</div>
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default withWebSocket(App)
