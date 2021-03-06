import React from 'react';

export const Spinning = () => {
  return (
    <div>
      <span className='flex w-3 h-3'>
        <span className='absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping'></span>
        <span className='relative inline-flex w-3 h-3 bg-purple-500 rounded-full'></span>
      </span>
    </div>
  );
};

export const PrimarySpinner = () => (
  <div className="flex flex-wrap w-full space-x-3 mx-96 justify-item md:space-x-6 ">
    <Spinner color="#1d4ed8" className="h-14" />
    <Spinner color="#047857" className="h-14" />
    <Spinner color="#dc2626" className="h-14" />
  </div>
);

export const SpinnerPage = () => (
  <div className="flex flex-wrap space-x-3 md:space-x-6 ">
    <Spinner color="#1d4ed8" className="h-12" />
    <Spinner color="#047857" className="h-12" />
    <Spinner color="#dc2626" className="h-12" />
    <Spinner color="#f59e0b" className="h-12" />
    <Spinner color="#312e81" className="h-12" />
  </div>
);

export const Spinner = ({ color, className }) => (
  <svg
    fill={color}
    viewBox="0 0 1792 1792"
    className={`${className} flex-no-shrink animate-spin`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
  </svg>
);

export default PrimarySpinner;
