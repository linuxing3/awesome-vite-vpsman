import React, { useState } from 'react';
import {
  getRespositories,
  getUserInfo,
  auth,
  urqlClient,
  APP_ID,
  GithubNode
} from '../../service/github';
import { Provider } from 'urql';
import Spinning from '../../components/Spinning';

const Project = ({ username }) => {

  // 获取代码仓库
  const [{ data, fetching, error }, reexecuteQuery] = getRespositories(
    username
  );

  // 获取用户信息
  const [userInfo] = getUserInfo(username);

  if (fetching) return <Spinning />;

  const needsLoginService = auth.findMissingAuthServices(error)[0];

  const AuthButton = () => (
    <button
      className='block w-full px-4 py-2 text-xl text-left text-gray-700'
      onClick={async () => {
        if (!needsLoginService) {
          await auth.login(needsLoginService);
          reexecuteQuery({ requestPolicy: 'cache-and-network' });
        } else {
          const loginSuccess = await auth.isLoggedIn(needsLoginService);
          if (loginSuccess) {
            console.log('Successfully logged into ' + needsLoginService);
            reexecuteQuery({ requestPolicy: 'cache-and-network' });
          } else {
            console.log('The user did not grant auth to ' + needsLoginService);
          }
        }
      }}
    >
      {needsLoginService
        ? `Log in to ${needsLoginService}`
        : 'Query Github Projects'}
    </button>
  );

  const dataEl = data ? (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Author
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Status
          </th>
          <th scope='col' className='relative px-6 py-3'>
            <span className='sr-only'>Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {data.map((project: GithubNode) => (
          <tr key={project.id}>
            <td className='px-6 py-4 whitespace-nowrap'>
              <div className='flex items-center'>
                <div className='flex-shrink-0 w-10 h-10'>
                  <img
                    className='w-10 h-10 rounded-full'
                    src={userInfo ? userInfo.data?.avatarUrl : ''}
                    alt=''
                  />
                </div>
                <div className='ml-4'>
                  <div className='text-sm font-medium text-gray-900'>
                    {userInfo ? userInfo.data?.name : ''}
                  </div>
                </div>
              </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <div className='text-sm text-gray-900'>
                <a
                  href={project.url}
                  className='text-indigo-600 hover:text-indigo-900'
                >
                  {project.url}
                </a>
              </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                Active
              </span>
            </td>
            <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
              <a
                href={project.url}
                className='text-indigo-600 hover:text-indigo-900'
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;

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
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
            <br />
            {dataEl}
            {errorEl}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GithubProject() {
  return (
    <Provider value={urqlClient}>
      <Project username={'linuxing3'} />
    </Provider>
  );
}
