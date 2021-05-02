import React from 'react';
import { Route, Switch, Redirect } from 'dva/router';

import LoginForm from '../pages/LoginForm';
import Setting from '../pages/Setting';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Profile from '../pages/Profile';
import MemberForm from '../pages/Member/MemberForm';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  // localStorage.setItem('access_token', '000');
  let token = localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default () => (
  <Switch>
    <Route path='/login'>
      <LoginForm />
    </Route>
    <PrivateRoute path='/member/add'>
      <MemberForm />
    </PrivateRoute>
    <PrivateRoute path='/settings'>
      <Setting />
    </PrivateRoute>
    <PrivateRoute path='/profile'>
      <Profile />
    </PrivateRoute>
    <PrivateRoute path='/projects'>
      <Project />
    </PrivateRoute>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
);
