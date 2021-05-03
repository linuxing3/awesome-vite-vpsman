import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames } from '../utils';

const navigation = [
  {
    key: 1,
    url: '/',
    title: 'Dashboard'
  },
  {
    key: 2,
    url: '/promotion',
    title: 'Promotion'
  },
  {
    key: 3,
    url: '/projects',
    title: 'Projects'
  }
];

const profile = [
  {
    key: 1,
    url: '/profile',
    title: 'Your Profile'
  },
  {
    key: 2,
    url: '/settings',
    title: 'settings'
  },
  {
    key: 3,
    url: '/login',
    title: 'Sign Out'
  }
];

export default ({ avatarUrl }) => {
  const gradientColor =
    'linear-gradient(90deg, rgb(33 22 206) 0%, rgb(183 168 222) 100%)';

  return (
    <div>
      <Disclosure
        as='nav'
        style={{
          background: gradientColor
        }}
      >
        {({ open }) => (
          <>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-8 h-8'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='hidden md:block'>
                    <div className='flex items-baseline ml-10 space-x-4'>
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={itemIdx}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a
                              href='/'
                              className='px-3 py-2 text-sm font-medium text-white rounded-md'
                            >
                              {item.title}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={itemIdx}
                            href={item.url}
                            className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white'
                          >
                            {item.title}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='flex items-center ml-4 md:ml-6'>
                    <button className='p-1 text-gray-100 bg-indigo-300 rounded-full hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='w-6 h-6' aria-hidden='true' />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as='div' className='relative ml-3'>
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className='flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                              <span className='sr-only'>Open user menu</span>
                              <img
                                className='w-10 h-10 rounded-full'
                                src={avatarUrl}
                                alt=''
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                          >
                            <Menu.Items
                              static
                              className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                            >
                              {profile.map((item, itemIdx) => (
                                <Menu.Item key={itemIdx}>
                                  {({ active }) => (
                                    <a
                                      href={item.url}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.title}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className='flex -mr-2 md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={itemIdx}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href='#'
                        className='block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md'
                      >
                        {item.title}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={itemIdx}
                      href={item.url}
                      className='block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white'
                    >
                      {item.title}
                    </a>
                  )
                )}
              </div>
              <div className='pt-4 pb-3 border-t border-gray-700'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-10 h-10 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>
                      Tom Cook
                    </div>
                    <div className='text-sm font-medium leading-none text-gray-400'>
                      tom@example.com
                    </div>
                  </div>
                  <button className='flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='w-6 h-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='px-2 mt-3 space-y-1'>
                  {profile.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.url}
                      className='block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700'
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <header className='bg-white shadow'>
        <div className='px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        </div>
      </header> */}
    </div>
  );
};
