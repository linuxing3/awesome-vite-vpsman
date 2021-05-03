import React from 'react';

export const TableCard = () => {
  return (
    <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
      <div className='bg-white border-transparent rounded-lg shadow-xl'>
        <div className='p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100'>
          <h5 className='font-bold text-gray-600 uppercase'>Graph</h5>
        </div>
        <div className='p-5'>
          <table className='w-full p-5 text-gray-700'>
            <thead>
              <tr>
                <th className='text-left text-blue-900'>Name</th>
                <th className='text-left text-blue-900'>Side</th>
                <th className='text-left text-blue-900'>Role</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Obi Wan Kenobi</td>
                <td>Light</td>
                <td>Jedi</td>
              </tr>
              <tr>
                <td>Greedo</td>
                <td>South</td>
                <td>Scumbag</td>
              </tr>
              <tr>
                <td>Darth Vader</td>
                <td>Dark</td>
                <td>Sith</td>
              </tr>
            </tbody>
          </table>

          <p className='py-2'>
            <a href='#'>See More issues...</a>
          </p>
        </div>
      </div>
    </div>
  );
};
