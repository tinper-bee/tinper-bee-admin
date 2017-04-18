import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Dashbroad } from '../containers';

import React from 'react';

export default (
  <Router history={browserHistory}>
      <Route path="/" component={App} >
          <IndexRoute path="/dashbroad" component={Dashbroad}/>
      </Route>
  </Router>
)
