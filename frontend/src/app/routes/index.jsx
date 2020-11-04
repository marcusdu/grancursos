import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';

const PublicRoutes = (props) => (<Route {...props} />);

// const PrivateRoutes = (props) => (<Route {...props} />);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoutes patch="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes;
