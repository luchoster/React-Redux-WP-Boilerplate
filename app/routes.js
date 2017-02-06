import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './index'
import Home from './containers/home'
import Page from './containers/page'

const routes = (
  <Route path='/' component={Index}>
    <IndexRoute component={Home}/>
    <Route path='/:pageSlug' component={Page}/>
  </Route>
)

export default routes
