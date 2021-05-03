import React from 'react';
import Switch from './routes';
import { RouteComponentProps, routerRedux } from 'dva/router';
import { SubscriptionAPI } from 'dva';
import NavBar from './components/Navbar';

export interface Props extends RouteComponentProps {}

const { ConnectedRouter } = routerRedux;

export default function App(props: Props & SubscriptionAPI) {

  let avatarUrl = localStorage.getItem('avatarUrl') || 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

  return (
    <ConnectedRouter history={props.history}>
      <div>
        <NavBar avatarUrl={avatarUrl} />
        <main>
          <div className='py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <div className='px-4 py-6 sm:px-0'>
              <div className='border-0 border-dashed rounded-lg border-white-200 h-96'>
                <Switch></Switch>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </ConnectedRouter>
  );
}
