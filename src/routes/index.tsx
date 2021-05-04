import React from 'react';
import { Route, Switch, Redirect } from 'dva/router';

import Home from '../pages/Landing';
import Promotion from '../pages/Promotion';
import DashBoard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';

import Setting from '../pages/User/Setting';
import Profile from '../pages/User/Profile';

import MemberForm from '../pages/Member/MemberForm';
import MemberList from '../pages/Member/MemberList';

import Project from '../pages/Project/ProjectList';

import OrderList from '../pages/oms/order';

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
      <Login />
    </Route>
    <PrivateRoute path='/dashboard'>
      <DashBoard />
    </PrivateRoute>
    <PrivateRoute path='/promotion'>
      <Promotion />
    </PrivateRoute>
    <PrivateRoute path='/member/form'>
      <MemberForm />
    </PrivateRoute>
    <PrivateRoute path='/member/list'>
      <MemberList />
    </PrivateRoute>
    <PrivateRoute path='/order/list'>
      <OrderList />
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
