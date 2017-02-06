import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers/index'

import routes from './routes'

const INIT_STATE = {}
const store = createStore(
  reducer,
  INIT_STATE,
  applyMiddleware(thunk)
)


// render(<Home />, document.getElementById('app'))

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('app'))
