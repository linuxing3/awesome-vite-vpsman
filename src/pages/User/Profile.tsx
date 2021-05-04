import React from 'react';
import { Provider } from 'urql';
import { auth, urqlClient, getUserInfo, GithubUserInfo, APP_ID } from '../../service/github';
import BasicInfoForm from './BasicInfoForm';
import PersonalInfoForm from './PersonalInfoForm';
import NotificationForm from './NotificationForm';
import DividerLine from '../../components/DividerLine';
import Spinning from '../../components/Spinning';

const defaultUser: { data: GithubUserInfo }= {
  data: {
    avatarUrl:
      'https://avatars.githubusercontent.com/u/577637?u=89925d8d4e267340a386256d0f788ef39a499734&v=4',
    login: 'linuxing3',
    name: 'wenju xing',
    email: 'linuxing3@qq.com',
    bio: 'A nonprofessional programming lover',
    websiteUrl: 'https://linuxing3.github.io/',
    status: null,
  }
};

const UserInfoContext = React.createContext({});

const Profile = ({ username }) => {
  const [{ data, fetching, error }, reexecuteQuery] = getUserInfo(username);

  // 没有数据时不显示组件
  if (fetching) return <Spinning />
  
  // 错误时尝试重新登录
  const needsLoginService = auth.findMissingAuthServices(error)[0];

  const loginOneGraph = async () => {
    if (!needsLoginService) {
      reexecuteQuery({ requestPolicy: 'cache-and-network' });
    } else {
      await auth.login(needsLoginService);
      const loginSuccess = await auth.isLoggedIn(needsLoginService);
      if (loginSuccess) {
        console.log('Successfully logged into ' + needsLoginService);
        reexecuteQuery({ requestPolicy: 'cache-and-network' });
      } else {
        console.log('The user did not grant auth to ' + needsLoginService);
      }
    }
  };

  const AuthButton = () => (
    <button
      className='block w-full px-4 py-2 text-xl text-left text-gray-700'
      onClick={() => loginOneGraph()}
    >
      {needsLoginService ? `Link ${needsLoginService} Account` : 'Github User'}
    </button>
  );

  const handleBasicSubmit = (values: Partial<GithubUserInfo>) => {
    console.log(values);
    window.location.href = '/profile';
  };

  const handlePersonalInfoSubmit = (values: Partial<GithubUserInfo>) => {
    console.log(values);
    window.location.href = '/profile';
  };


  const dataEl = data ? (
    <UserInfoContext.Provider value={defaultUser}>
      <div>
        {/* Basic Info Form */}
        <div className='p-6 md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Profile
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                {data ? data.bio : ''}
              </p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            {data && (
              <BasicInfoForm
                userInfo={data}
                handleSubmit={handleBasicSubmit}
              ></BasicInfoForm>
            )}
          </div>
        </div>
      </div>

      <DividerLine></DividerLine>

      {/* Personal Info Form */}
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Personal Information
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            {data && (
              <PersonalInfoForm
                userInfo={data}
                handleSubmit={handlePersonalInfoSubmit}
              />
            )}
          </div>
        </div>
      </div>

      <DividerLine></DividerLine>

      {/* Notification Info Form */}
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Notifications
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Decide which communications you'd like to receive and how.
              </p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <NotificationForm
              handleSubmit={handlePersonalInfoSubmit}
            ></NotificationForm>
          </div>
        </div>
      </div>
    </UserInfoContext.Provider>
  ): null;

  const errorEl = error ? (
    <div className='error-box'>
      Error in UnnamedQuery. <br />
      <AuthButton></AuthButton>
      {error.message && error.message.startsWith('[Network]') ? (
        <span>
          Make sure <strong>{window.location.origin}</strong> is in your CORS
          origins on the{' '}
          <a
            href={`https://www.onegraph.com/dashboard/app/${APP_ID}?add-cors-origin=${window.location.origin}`}
          >
            OneGraph dashboard for your app
          </a>
          .
        </span>
      ) : null}
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  ) : null;

  return (
    <div>
      {errorEl}
      {dataEl}
    </div>
  )
};

export default function GithubUserProfile() {
  return (
    <Provider value={urqlClient}>
      <Profile username={'linuxing3'} />
    </Provider>
  );
}
