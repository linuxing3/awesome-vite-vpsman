import React from 'react';

const AdvertCard = () => {
  return (
    <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
      <div className='bg-white border-transparent rounded-lg shadow-xl'>
        <div className='p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100'>
          <h5 className='font-bold text-gray-600 uppercase'>Advert</h5>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;