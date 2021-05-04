import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';

import { addMember, updateMember } from '../../service/member/member';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TWInput } from '../../components/TWControl';

type FormValues = Member.MemberItem;

const defaultValues: FormValues = {
  member_level_id: 4,
  username: 'xingwenju',
  password: '123456',
  nickname: 'linuxing3',
  phone: '18813330352',
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    await addMember(data);
    setTimeout(() => {
      window.location.href = '/member/list';
    }, 500);
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
    <div className='flex justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='w-auto h-12 mx-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Add new member
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-md shadow-sm '>
            <TWInput
              type='text'
              label='username'
              register={register}
              style=''
            ></TWInput>
            <TWInput
              type='text'
              label='phone'
              register={register}
              style=''
            ></TWInput>
            <TWInput
              type='password'
              label='password'
              register={register}
              style=''
            ></TWInput>
            <TWInput
              type='text'
              label='nickname'
              register={register}
              style=''
            ></TWInput>
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
              {'Edit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MemberForm;
