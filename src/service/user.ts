import ajax from '../utils/request';
export interface LoginParams extends API.UserStateType{
  type?: number;
  email?: string;
  captcha?: string;
  smscode?: string;
  remember?: number;
}

const prev = '';
// 测试
export const loginUser = async (data: LoginParams, method: string) =>
  ajax(`${prev}/user/login`, data, method);

export const logoutUser = async (data: LoginParams, method: string) =>
  ajax(`${prev}/user/logout`, data, method);
  
export const registerUser = async (data: LoginParams, method: string) =>
  ajax(`${prev}/user/register`, { smscode: '20090909', ...data }, method);
