import { Model } from 'dva'

const app: Model = {
  namespace: 'app',
  state: {
    color: 'blue',
    theme: 'dark',
    author: {
      name: 'linuxing3'
    }
  },
  reducers: {
    set(state, { payload: data }) {
      return {...state, ...data};
    },
  },
  effects: {
    *setTheme({ payload: theme }, { put }) {
      yield put({ type: 'set', payload: { theme } });
    },
    *setColor({ payload: color }, { put }) {
      yield put({ type: 'set', payload: { color } });
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'load' });
        }
      });
    },
  },
}

export default app;