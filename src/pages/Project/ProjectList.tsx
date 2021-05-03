import React, { useState } from 'react';
import {
  getRespositories,
  getUserInfo,
  auth,
  urqlClient,
  APP_ID,
  GithubNode
} from '../../service/github';
import { Provider, useQuery } from 'urql';

const Project = ({ username }) => {

  // 获取代码仓库
  const [{ data, fetching, error }, reexecuteQuery] = getRespositories(
    username
  );

  // 获取用户信息
  const [userInfo] = getUserInfo(username);

  if (fetching) return <pre>Loading...</pre>;

  const dataEl = data ? (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Author
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
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
                <div className='flex-shrink-0 h-10 w-10'>
                  <img
                    className='h-10 w-10 rounded-full'
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
              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                Active
              </span>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
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

  const needsLoginService = auth.findMissingAuthServices(error)[0];

  const AuthButton = () => (
    <button
      className='text-gray-700 block w-full text-left px-4 py-2 text-xl'
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

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <AuthButton></AuthButton>
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
