import React from 'react';
import MetricCard from '../../components/MetricCard';
import GraphCard from '../../components/GraphCard';

const DashBoard = () => {
  return (
    <div className='flex flex-row flex-wrap flex-grow mt-2'>
      <div className='w-full p-16'>
        <MetricCard />
        <GraphCard />
      </div>
    </div>
  );
};

export default DashBoard;
