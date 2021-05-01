import { Model } from 'dva'

const app: Model = {
  namespace: 'app',
  state: [],
  reducers: {
    add(state, { payload: data }) {
      return [...state, data];
    },
  },
  effects: {
    *save({ payload: data }, { put, call }) {
      yield call(()=>{}, data);
      yield put({ type: 'add', payload: data });
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