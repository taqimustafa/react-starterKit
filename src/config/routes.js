import React from 'react'
// layouts
import Blank from '../components/layouts/Blank.js';
// views
import Home from '../views/Home.js';

import { Route, Router, browserHistory, IndexRedirect, IndexRoute} from 'react-router';

export default (
	<Router>
		<Route path={"/"} component={Blank}>
      <IndexRoute component={Home}/>
    </Route>
	</Router>
);
