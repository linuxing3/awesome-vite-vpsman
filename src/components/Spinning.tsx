import React from 'react';

const Spinning = () => {
  return (
    <div>
      <span className='flex w-3 h-3'>
        <span className='absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping'></span>
        <span className='relative inline-flex w-3 h-3 bg-purple-500 rounded-full'></span>
      </span>
    </div>
  );
};

export default Spinning;
