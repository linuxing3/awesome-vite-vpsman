import { Model } from 'dva';

export interface AppModel {
  color: string;
  gradientColor: string;
  theme: string;
  author: {
    name: string;
    avatarUrl: string;
  },
  setColor:(color: string)=>void;
  setTheme:(theme: string)=>void;
  setGradientColor:(color: string)=>void;
}

const app: Model = {
  namespace: 'app',
  state: {
    color: 'blue',
    gradientColor:
      'linear-gradient(90deg, rgb(33 22 206) 0%, rgb(183 168 222) 100%)',
    theme: 'dark',
    author: {
      name: 'linuxing3',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/577637?u=89925d8d4e267340a386256d0f788ef39a499734&v=4'
    }
  },
  reducers: {
    set(state, { payload: data }) {
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
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        // if (pathname === '/') {
        //   dispatch({ type: 'load' });
        // }
      });
    }
  }
};

export default app;
