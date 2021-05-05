import React, { forwardRef } from 'react';

export const ButtonPage = () => (
  <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
    <Button color="danger">Danger</Button>
    <Button color="warning">Warning</Button>
    <Button color="dark">Dark</Button>
    <Button color="indigo">Indigo</Button>
  </div>
);

export const Button = forwardRef(({ color, children, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${colors[color]} text-white focus:outline-none shadow rounded px-6 py-2 font-medium transition ease-in duration-200`}
  >
    {children}
  </button>
));

/* You can replace those colors with your own*/
const colors = {
  primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100`,
  success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100`,
  danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100`,
  dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
  warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
  indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
};