/** Created by guangqiang on 2017/12/17. */
import { Model } from 'dva'
import { OrderItem } from './data';
import * as orderService from './service';

const order: Model & { state: { list: OrderItem[]}} = {
  namespace: 'order',
  state: {
    list: []
  },
  reducers: {
    save(state, { payload: { data } }): {list: OrderItem[]} {
      return { list: [...data] };
    }
  },
  effects: {
    *queryOrderList({ payload: value }, { call, put }) {
      console.log('Getting orders...');
      const orderResp = yield call(orderService.queryOrderList, value, 'POST');
      console.log(orderResp);
      yield put({ type: 'save', payload: { data: orderResp.data } });
    }
  }
};

export default order;
