import React from 'react';
import Switch from './routes';
import { RouteComponentProps, routerRedux } from 'dva/router';
import { connect, SubscriptionAPI } from 'dva';
import NavBar from './components/Navbar';

type RouterProps = RouteComponentProps & SubscriptionAPI & API.AppPropsType;

const { ConnectedRouter } = routerRedux;

function App({ currentUser, navigation, profile, history, gradientColor }: RouterProps) {

  return (
    <ConnectedRouter history={history}>
      <div>
        <NavBar currentUser={currentUser} profile={profile} navigation={navigation} gradientColor={gradientColor} />
        <main>
          <div className='py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='px-4 py-6 sm:px-0'>
              <div className='h-auto border-0 border-dashed rounded-lg border-white-200'>
                <Switch></Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ConnectedRouter>
  );
}

const mapStateToProps = (state) => state.app;

const mapDispatchToProps = (dispatch) => ({
  setTheme(theme) {
    dispatch({ type: 'app/setTheme', payload: theme });
  },
  setColor(color) {
    dispatch({ type: 'app/setColor', payload: color });
  },
  setGradientColor(color) {
    dispatch({ type: 'app/setGradienteColor', payload: color });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
