/**
 * Form tweaked with hook
 */
import { connect } from 'dva';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TWInput } from '../../components/TWControl';

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

function Login({ login }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    login({ ...data });
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
          <h1 className='text-4xl font-bold text-center text-white uppercase'>
            Vpsman
          </h1>
        </a>
      </header>

      <main className='max-w-lg p-8 mx-auto my-10 bg-white rounded-lg shadow-2xl md:p-12'>
        <section>
          <h3 className='text-2xl font-bold'>
            Welcome to <span className='text-indigo-600'>VPSMAN</span>
          </h3>
          <p className='pt-2 text-gray-600'>Sign in to your account.</p>
        </section>

        <section className='mt-10'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            {/* Text Fields */}
            <TWInput
              type='text'
              label='mobile'
              register={register}
              style='text-indigo-600'
            ></TWInput>
            <TWInput
              type='password'
              label='password'
              register={register}
              style='text-indigo-600'
            ></TWInput>
            {/* Text Fields */}
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

const mapStateToProps = (state) => {
  return state.user;
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(loginInfo) {
      dispatch({ type: 'user/login', payload: loginInfo });
    },
    signup(loginInfo) {
      dispatch({ type: 'user/signup', payload: loginInfo });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
