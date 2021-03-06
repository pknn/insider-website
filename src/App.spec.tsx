import { shallow } from 'enzyme'
import App from './App'

const getShallowMounted = () => shallow(<App />)

describe('<App />', () => {
  it('should render correctly', () => {
    const component = getShallowMounted()

    expect(component).toMatchSnapshot()
    expect(component.text()).toBe('Vite React App')
  })
})
