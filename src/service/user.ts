import ajax from '../utils/fetch';
const prev = '/api';
// 测试
export const loginUser = async (data: {}, method: string) => ajax(`${prev}/user/login`, data, method);
export const logoutUser = async (data: {}, method: string) => ajax(`${prev}/user/logout`, data, method);

