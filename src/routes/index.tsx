import React from 'react'
import { Route, Switch } from 'dva/router';

import LoginForm from '../pages/LoginForm';
import Setting from '../pages/Setting';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Profile from '../pages/Profile';

export default () => (
  <Switch>
    <Route path="/login">
      <LoginForm />
    </Route>
    <Route path="/settings">
      <Setting />
    </Route>
    <Route path="/projects">
      <Project />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)