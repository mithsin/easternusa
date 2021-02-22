import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSlice } from 'States/userSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userSignIn = useSelector(isLoggedInSlice);

  return (
    <Route {...rest} render={(props) => (
      userSignIn === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
};

export default PrivateRoute;