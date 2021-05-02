/** Created by guangqiang on 2017/12/17. */
import { Model } from 'dva'
import * as orderService from '../service/order';

const order: Model = {
  namespace: 'order',
  state: {
    list: []
  },
  reducers: {
    save(state, { payload: { data } }) {
      return { list: [...data] };
    }
  },
  effects: {
    *fetch({ payload: value }, { call, put }) {
      // 模拟网络请求
      console.log('Getting orders...');
      const orderResp = yield call(orderService.getOrderList, value, 'POST');
      console.log(orderResp);
      yield put({ type: 'save', payload: { data: orderResp.data } });
    }
  }
};

export default order;
