import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Admin, NotExist, Client } from 'Pages';
import PrivateRoute from './PrivateRoute';


const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
        <PrivateRoute exact path="/client" component = { Client } />
        <PrivateRoute exact path="/admin" component = { Admin } />
        <Route path='*' component={NotExist} />
    </Switch>
  );
}

export default PageRouter;
