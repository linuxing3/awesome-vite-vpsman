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

import { ButtonPage } from '../components/TWButton';
import { CardPage } from '../components/TWCard';
import { SimpleFormPage } from '../components/TWForm';
import { SidenavPage } from '../components/TWSideBar';
import { TWTable } from '../components/TWTable';

const privateRoutes = [
  { path: '/dashboard', component: DashBoard },
  { path: '/promotion', component: Promotion },
  { path: '/member/form', component: MemberForm },
  { path: '/member/list', component: MemberList },
  { path: '/order/list', component: OrderList },
  { path: '/settings', component: Setting },
  { path: '/profile', component: Profile },
  { path: '/projects', component: Project }
];

const publicRoutes = [
  { path: '/login', component: Login },
  { path: '/components/twbutton', component: ButtonPage },
  { path: '/components/twcard', component: CardPage },
  { path: '/components/twform', component: SimpleFormPage },
  { path: '/components/twside', component: SidenavPage },
  { path: '/components/twtable', component: TWTable },
];

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

const Router = () => {
  let token = localStorage.getItem('access_token');
  return (
    <Switch>
      {publicRoutes.map((route) => {
        return (
          <Route key={route.path} path={route.path} component={route.component}></Route>
        ) 
      })}
      {privateRoutes.map((route) => {
        return token ? (
          <Route key={route.path} path={route.path} component={route.component}></Route>
        ) : (
          <Redirect key={route.path}
            to={{ pathname: 'login', state: { from: window.location } }}
          ></Redirect>
        );
      })}
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Router;
