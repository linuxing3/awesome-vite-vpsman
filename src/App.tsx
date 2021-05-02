import React from 'react';
import Switch from './routes';
import { routerRedux } from 'dva/router';
import createBrowserHistory from 'history/createBrowserHistory';
import NavBar from './components/Navbar';

const { ConnectedRouter } = routerRedux;
const history = createBrowserHistory();

export default function App() {

  let avatarUrl = localStorage.getItem('avatarUrl') || 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

  return (
    <ConnectedRouter history={history}>
      <div>
        <NavBar avatarUrl={avatarUrl} />
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <div className='px-4 py-6 sm:px-0'>
              <div className='border-0 border-dashed border-white-200 rounded-lg h-96'>
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
