import React from 'react';
import { classNames } from '../utils';

const CardMeta = [
  {
    icon: 'fa fa-wallet',
    title: 'Total Revenue',
    description: '$3249',
  },
  {
    icon: 'fa fa-users',
    title: 'Total Users',
    description: '249',
  },
  {
    icon: 'fa fa-user-plus',
    title: 'Total Revenue',
    description: '$3249',
  },
  {
    icon: 'fas fa-server ',
    title: 'Server Uptime',
    description: '128',
  },
  {
    icon: 'fa fa-tasks',
    title: 'To Do List',
    description: '7',
  },
  {
    icon: 'fa fa-inbox',
    title: 'Issues',
    description: '3',
  },
]


const MetricCard = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
        <div className='p-5 border-b-4 border-green-600 rounded-lg shadow-xl bg-gradient-to-b from-green-200 to-green-100'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink pr-4'>
              <div className='p-5 bg-green-600 rounded-full'>
                <i className={classNames('fa-2x fa-inverse', CardMeta[0].icon)}></i>
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='font-bold text-gray-600 uppercase'>
                {CardMeta[0].title}
              </h5>
              <h3 className='text-3xl font-bold'>
                {CardMeta[0].description}{' '}
                <span className='text-green-500'>
                  <i className='fas fa-caret-up'></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
        <div className='p-5 border-b-4 border-pink-500 rounded-lg shadow-xl bg-gradient-to-b from-pink-200 to-pink-100'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink pr-4'>
              <div className='p-5 bg-pink-600 rounded-full'>
                <i className={classNames('fa-2x fa-inverse', CardMeta[1].icon)}></i>
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='font-bold text-gray-600 uppercase'>{CardMeta[1].title}</h5>
              <h3 className='text-3xl font-bold'>
                {CardMeta[1].description}{' '}
                <span className='text-pink-500'>
                  <i className='fas fa-exchange-alt'></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
        <div className='p-5 border-b-4 border-yellow-600 rounded-lg shadow-xl bg-gradient-to-b from-yellow-200 to-yellow-100'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink pr-4'>
              <div className='p-5 bg-yellow-600 rounded-full'>
                <i className={classNames('fa-2x fa-inverse', CardMeta[2].icon)}></i>
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='font-bold text-gray-600 uppercase'>{CardMeta[2].title}</h5>
              <h3 className='text-3xl font-bold'>
                {CardMeta[2].description}{' '}
                <span className='text-yellow-600'>
                  <i className='fas fa-caret-up'></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
        <div className='p-5 border-b-4 border-blue-500 rounded-lg shadow-xl bg-gradient-to-b from-blue-200 to-blue-100'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink pr-4'>
              <div className='p-5 bg-blue-600 rounded-full'>
              <i className={classNames('fa-2x fa-inverse', CardMeta[3].icon)}></i>
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='font-bold text-gray-600 uppercase'>
                {CardMeta[3].title}
              </h5>
              <h3 className='text-3xl font-bold'>{CardMeta[3].description} days</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
        <div className='p-5 border-b-4 border-indigo-500 rounded-lg shadow-xl bg-gradient-to-b from-indigo-200 to-indigo-100'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink pr-4'>
              <div className='p-5 bg-indigo-600 rounded-full'>
              <i className={classNames('fa-2x fa-inverse', CardMeta[4].icon)}></i>
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='font-bold text-gray-600 uppercase'>{CardMeta[4].title}</h5>
              <h3 className='text-3xl font-bold'>{CardMeta[4].description} tasks</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
        <div className='p-5 border-b-4 border-red-500 rounded-lg shadow-xl bg-gradient-to-b from-red-200 to-red-100'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink pr-4'>
              <div className='p-5 bg-red-600 rounded-full'>
              <i className={classNames('fa-2x fa-inverse', CardMeta[5].icon)}></i>
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='font-bold text-gray-600 uppercase'>{CardMeta[5].title}</h5>
              <h3 className='text-3xl font-bold'>
                {CardMeta[5].description}{' '}
                <span className='text-red-500'>
                  <i className='fas fa-caret-up'></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
