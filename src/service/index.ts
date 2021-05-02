import ajax from '../utils/request';
const prev = '/api';
// 测试
export const getOrderList = (data: {}, method: string) => ajax(`${prev}/order/list`, data, method);
