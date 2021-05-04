/**
 * Form without hook
 */
import React, { useState } from 'react';
import { connect } from 'dva';
import { LockClosedIcon } from '@heroicons/react/solid';
import { LoginParams } from '../../service/user';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => <div>{content}</div>;

type FormValues = {
  mobile: string;
  password: string;
  username?: string;
  type?: number;
};

const defaultValues = {
  mobile: '13901229638',
  password: '20090909',
  type: 1
};

function LoginForm({ login, signup }) {
  const [register, setRegister] = useState(false);

  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({
    status: 'error',
    type: ''
  });

  const [values, setValues] = useState<LoginParams>({
    email: 'linuxing3@qq.com',
    remember: 0,
    ...defaultValues,
  });

  const { status, type: loginType } = userLoginState;

  const handleEmailChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      email: e.target.value
    }));
  };

  const handleMobileChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      mobile: e.target.value
    }));
  };

  const handlePasswordChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      password: e.target.value
    }));
  };

  const handleRememberChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      remember: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (register) {
      signup(values);
    } else {
      login(values);
      setUserLoginState({ status: 'ok' });
    }
  };

  return (
    <div className='flex items-start justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='w-auto h-12 mx-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-sm text-center text-gray-600'>
            Or{' '}
            <a
              href='#'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit} method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              {/* Text Fields */}
              <label htmlFor='mobile' className='sr-only'>
                Mobile
              </label>
              <input
                id='mobile'
                name='mobile'
                autoComplete='mobile'
                required
                className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Mobile'
                value={values.mobile}
                onChange={handleMobileChange}
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                value={values.email}
                onChange={handleEmailChange}
              />
            </div>
            {/* Text Fields */}
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                value={values.password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                name='remember_me'
                type='checkbox'
                className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                value={values.remember}
                onChange={handleRememberChange}
              />
              <label
                htmlFor='remember_me'
                className='block ml-2 text-sm text-gray-900'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='w-5 h-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              {register ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          {/* login message */}
          {status === 'error' && loginType === 'mobile' && (
            <LoginMessage content='验证码错误' />
          )}
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.user;
}

function mapDispatchToProps(dispatch) {
  return {
    login(loginInfo) {
      dispatch({ type: 'user/login', payload: loginInfo });
    },
    signup(loginInfo) {
      dispatch({ type: 'user/signup', payload: loginInfo });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
