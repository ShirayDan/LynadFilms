import { Provider } from 'react-redux'
import store from './redux/store'

import { MainLayout } from './routes'

export const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )
}

