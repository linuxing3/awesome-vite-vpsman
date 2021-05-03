import React, { useState } from 'react';
import { LoginParamsType, loginUser, logoutUser } from '../../service/user';

export default function Login() {

  const [register, setRegister] = useState(false);
  
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({
    status: 'error',
    type: ''
  });

  const [values, setValues] = useState<LoginParamsType>({
    password: '20090909',
    email: 'linuxing3@qq.com',
    mobile: '13901229638',
    remember: 0,
    type: 1
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (register) {
      logoutUser(values, 'POST');
      window.location.href = '/'
    } else {
      loginUser(values, 'POST');
      setUserLoginState({ status: 'ok' });
      window.location.href = '/'
    }
  };
  
  return (
    <div
      className='min-h-screen px-2 pt-12 pb-6 body-bg md:pt-20 md:px-0'
      style={{
        backgroundColor: '#9921e8',
        backgroundImage: 'linear-gradient(315deg, #9921e8 0%, #5f72be 74%)'
      }}
    >
      <header className='max-w-lg mx-auto'>
        <a href='#'>
          <h1 className='text-4xl font-bold text-center text-white'>Startup</h1>
        </a>
      </header>

      <main className='max-w-lg p-8 mx-auto my-10 bg-white rounded-lg shadow-2xl md:p-12'>
        <section>
          <h3 className='text-2xl font-bold'>Welcome to Startup</h3>
          <p className='pt-2 text-gray-600'>Sign in to your account.</p>
        </section>

        <section className='mt-10'>
          <form className='flex flex-col' method='POST' onSubmit={handleSubmit}>
            <div className='pt-3 mb-6 bg-gray-200 rounded'>
              <label
                className='block mb-2 ml-3 text-sm font-bold text-gray-700'
                htmlFor='mobile'
              >
                Mobile
              </label>
              <input
                type='text'
                id='mobile'
                className='w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-purple-600'
                value={values.mobile}
                onChange={handleMobileChange}
              />
            </div>
            <div className='pt-3 mb-6 bg-gray-200 rounded'>
              <label
                className='block mb-2 ml-3 text-sm font-bold text-gray-700'
                htmlFor='password'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-purple-600'
                value={values.password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='flex justify-end'>
              <a
                href='#'
                className='mb-6 text-sm text-purple-600 hover:text-purple-700 hover:underline'
              >
                Forgot your password?
              </a>
            </div>
            <button
              className='py-2 font-bold text-white transition duration-200 bg-purple-600 rounded shadow-lg hover:bg-purple-700 hover:shadow-xl'
              type='submit'
            >
              Sign In
            </button>
          </form>
        </section>
      </main>

      <div className='max-w-lg mx-auto mt-12 mb-6 text-center'>
        <p className='text-white'>
          Don't have an account?{' '}
          <a href='#' className='font-bold hover:underline'>
            Sign up
          </a>
          .
        </p>
      </div>

      <footer className='flex justify-center max-w-lg mx-auto text-white'>
        <a href='#' className='hover:underline'>
          Contact
        </a>
        <span className='mx-3'>•</span>
        <a href='#' className='hover:underline'>
          Privacy
        </a>
      </footer>
    </div>
  );
}
