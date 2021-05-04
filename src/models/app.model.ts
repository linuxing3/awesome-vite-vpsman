import { Model } from 'dva';

type State = Partial<API.AppPropsType>;

const avatarUrl =
  'https://avatars.githubusercontent.com/u/577637?u=89925d8d4e267340a386256d0f788ef39a499734&v=4';

const navigation: API.MenuItemPropsType[] = [
  {
    key: 1,
    url: '/',
    title: 'Dashboard'
  },
  {
    key: 2,
    url: '/promotion',
    title: 'Promotion'
  },
  {
    key: 3,
    url: '/projects',
    title: 'Projects'
  }
];

const profile: API.MenuItemPropsType[] = [
  {
    key: 1,
    url: '/profile',
    title: 'Your Profile'
  },
  {
    key: 2,
    url: '/settings',
    title: 'Settings'
  },
  {
    key: 3,
    url: '/login',
    title: 'Sign Out'
  }
];

const state: State = {
  color: 'blue',
  gradientColor:
    'linear-gradient(90deg, rgb(33 22 206) 0%, rgb(183 168 222) 100%)',
  theme: 'dark',
  currentUser: {
    name: 'linuxing3',
    avatarUrl
  },
  navigation,
  profile
};

const app: Model = {
  namespace: 'app',
  state,
  reducers: {
    set(state: State, { payload: data }): State {
      return { ...state, ...data };
    }
  },
  effects: {
    *setTheme({ payload: theme }, { put }) {
      yield put({ type: 'set', payload: { theme } });
    },
    *setColor({ payload: color }, { put }) {
      yield put({ type: 'set', payload: { color } });
    },
    *setGradientColor({ payload: color }, { put }) {
      yield put({ type: 'set', payload: { gradientColor: color } });
    },
    *bingo() { }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'app/bingo' });
        }
      });
    }
  }
};

export default app;
