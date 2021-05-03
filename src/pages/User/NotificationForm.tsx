import React from 'react';

const NotificationForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className='overflow-hidden shadow sm:rounded-md'>
      <div className='px-4 py-5 space-y-6 bg-white sm:p-6'>
        <fieldset>
          <legend className='text-base font-medium text-gray-900'>
            By Email
          </legend>
          <div className='mt-4 space-y-4'>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='comments'
                  name='comments'
                  type='checkbox'
                  className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='comments' className='font-medium text-gray-700'>
                  Comments
                </label>
                <p className='text-gray-500'>
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='candidates'
                  name='candidates'
                  type='checkbox'
                  className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label
                  htmlFor='candidates'
                  className='font-medium text-gray-700'
                >
                  Candidates
                </label>
                <p className='text-gray-500'>
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='offers'
                  name='offers'
                  type='checkbox'
                  className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='offers' className='font-medium text-gray-700'>
                  Offers
                </label>
                <p className='text-gray-500'>
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <legend className='text-base font-medium text-gray-900'>
              Push Notifications
            </legend>
            <p className='text-sm text-gray-500'>
              These are delivered via SMS to your mobile phone.
            </p>
          </div>
          <div className='mt-4 space-y-4'>
            <div className='flex items-center'>
              <input
                id='push_everything'
                name='push_notifications'
                type='radio'
                className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
              />
              <label
                htmlFor='push_everything'
                className='block ml-3 text-sm font-medium text-gray-700'
              >
                Everything
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='push_email'
                name='push_notifications'
                type='radio'
                className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
              />
              <label
                htmlFor='push_email'
                className='block ml-3 text-sm font-medium text-gray-700'
              >
                Same as email
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='push_nothing'
                name='push_notifications'
                type='radio'
                className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
              />
              <label
                htmlFor='push_nothing'
                className='block ml-3 text-sm font-medium text-gray-700'
              >
                No push notifications
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
        <button
          type='submit'
          className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Save
        </button>
      </div>
    </div>
  </form>
);

export default NotificationForm;