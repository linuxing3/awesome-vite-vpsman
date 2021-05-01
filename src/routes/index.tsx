
import React from 'react'
import { Route, Switch } from 'dva/router';
import LoginForm from '../pages/LoginForm';
import Home from '../pages/Home';

export default () => (
  <Switch>
    <Route path="/login">
      <LoginForm />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)