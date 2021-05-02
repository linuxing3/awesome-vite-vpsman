import ajax from '../utils/request';
const prev = '/api';
export interface LoginParamsType {
  type: number;
  mobile: string;
  password: string;
  username?: string;
  email?: string;
  captcha?: string;
  remember?: number;
}

// 测试
export const loginUser = async (data: {}, method: string) => ajax(`${prev}/user/login`, data, method);
export const logoutUser = async (data: {}, method: string) => ajax(`${prev}/user/logout`, data, method);

