import React from 'react';
import Switch from './routes';
import { routerRedux } from 'dva/router';
import createBrowserHistory from 'history/createBrowserHistory';
import NavBar from './components/Navbar';

const { ConnectedRouter } = routerRedux;
const history = createBrowserHistory();

export default function App() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <NavBar />
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <div className='px-4 py-6 sm:px-0'>
              <div className='border-4 border-dashed border-white-200 rounded-lg h-96'>
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
