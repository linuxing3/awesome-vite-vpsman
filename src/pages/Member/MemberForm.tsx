import React, { useState } from 'react';
import { connect } from 'dva';
import { LockClosedIcon } from '@heroicons/react/solid';

import { addMember, updateMember } from '../../service/member/member';

const sampleMember = {
  id: 14,
  member_level_id: 4,
  username: 'xingwenju',
  password: '123456',
  nickname: 'zhangsan',
  phone: '18613030352',
  status: 1,
  create_time: '2021-03-16 20:40:55',
  icon: '',
  gender: 1,
  birthday: '2021-03-16 00:00:00',
  city: '深圳',
  job: 'go开发',
  personalized_signature: 'test',
  source_type: 1,
  integration: 100,
  growth: 20,
  luckey_count: 1000,
  history_integration: 1000
};

function MemberForm() {
  const [values, setValues] = useState<Member.MemberItem>(sampleMember);

  const [isUpdate, setIsUpdate] = useState(false);

  const handleUsernameChange = (e) => {
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
    if (isUpdate) {
      handleUpdate(values);
    } else {
      try {
        addMember(values);
        window.location.href = '/member/list'
        return true;
      } catch (error) {
        console.error('添加会员失败，请重试');
        window.location.href = '/member/list'
        return false;
      }
    }
  };

  /**
   * 更新节点
   * @param fields
   */
  const handleUpdate = async (values: Member.MemberItem) => {
    try {
      await updateMember(values);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className='min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Add new member
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit} method='POST'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='username' className='my-10'>
                UserName
              </label>
              <input
                id='username'
                name='username'
                autoComplete='username'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Username'
                value={values.username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor='password' className='my-10'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                value={values.password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MemberForm;
