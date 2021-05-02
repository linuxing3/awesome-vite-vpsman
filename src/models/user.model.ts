/** Created by guangqiang on 2017/12/17. */
import * as userService from '../service/user';
import { routerRedux } from 'dva/router';

const defaultState = {
  auid: 0,
  uid: 0,
  beid: 0,
  ptyid: 0,
  username: '',
  mobile: '',
  nickname: '',
  openid: '',
  avator: '',
  access_token: '',
  access_expire: 0,
  refresh_after: 0
};

export default {
  namespace: 'user',
  state: defaultState,
  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, ...data };
    }
  },
  effects: {
    *login({ payload: value }, { call, put }) {
      // 模拟网络请求
      console.log('Login...');
      const userResp = yield call(userService.loginUser, value, 'POST');
      console.log(userResp);
      localStorage.setItem('access_token', userResp.data.access_token);
      // 跳转
      yield put({ type: 'save', payload: { data: userResp.data } });
      console.log('Redirecting to user page...');
      yield put(routerRedux.push("/user"));
    },
    *logout({ payload: value }, { call, put }) {
      // 模拟网络请求
      console.log('Logout...' + value.mobile);
      localStorage.setItem('access_token', '');
      yield put({
        type: 'save',
        payload: { data: defaultState }
      });
      console.log('Redirecting to home page...');
      yield put(routerRedux.push("/"));
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {}
  }
};
