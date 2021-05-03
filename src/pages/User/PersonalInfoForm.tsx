import React, {useState} from 'react';
import { GithubUserInfo } from '../../service/github';

const PersonalInfoForm = ({ userInfo, handleSubmit }) => {
  
  const [username, setUsername] = useState((userInfo as GithubUserInfo).name);

  const [email, setEmail] = useState((userInfo as GithubUserInfo).email);

  const handleUsernameChange = (e) => {
    e.persist();
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit({
      username,
      email
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className='overflow-hidden shadow sm:rounded-md'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='first_name'
                  className='block text-sm font-medium text-gray-700'
                >
                  First name
                </label>
                <input
                  value={username}
                  onChange={handleUsernameChange}
                  type='text'
                  name='first_name'
                  id='first_name'
                  autoComplete='given-name'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='last_name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last name
                </label>
                <input
                  value={username}
                  onChange={handleUsernameChange}
                  type='text'
                  name='last_name'
                  id='last_name'
                  autoComplete='family-name'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-4'>
                <label
                  htmlFor='email_address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <input
                  onChange={handleEmailChange}
                  value={email}
                  type='text'
                  name='email_address'
                  id='email_address'
                  autoComplete='email'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country / Region
                </label>
                <select
                  id='country'
                  name='country'
                  autoComplete='country'
                  className='block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='street_address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Street address
                </label>
                <input
                  type='text'
                  name='street_address'
                  id='street_address'
                  autoComplete='street-address'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  City
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                <label
                  htmlFor='state'
                  className='block text-sm font-medium text-gray-700'
                >
                  State / Province
                </label>
                <input
                  type='text'
                  name='state'
                  id='state'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                <label
                  htmlFor='postal_code'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP / Postal
                </label>
                <input
                  type='text'
                  name='postal_code'
                  id='postal_code'
                  autoComplete='postal-code'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>
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
    </div>
  );
};

export default PersonalInfoForm;
