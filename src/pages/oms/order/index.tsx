import React, { useEffect } from 'react';
import { connect } from 'dva';
import Spinning from '../../../components/Spinning';
import { OrderPropsType } from './data.d';

const OrderList = ({ list: orders, queryOrderList }: OrderPropsType) => {
  const queryParams = {
    current: 0,
    pageSize: 10
  };

  useEffect(() => {
    queryOrderList(queryParams);
    return () => {
      console.log(orders);
    };
  }, []);

  const dataEl = orders ? (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Member Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Receiever Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Phone
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            City
          </th>
          <th scope='col' className='relative px-6 py-3'>
            <span className='sr-only'>Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className='px-6 py-4 whitespace-nowrap'>
              <div className='flex items-center'>
                <div className='ml-4'>
                  <div className='text-sm font-medium text-gray-900'>
                    {order.member_username}
                  </div>
                </div>
              </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <div className='text-sm text-gray-900'>{order.receiver_name}</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                {order.receiver_phone}
              </span>
            </td>
            <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
              <a
                href={order.receiver_province}
                className='text-indigo-600 hover:text-indigo-900'
              >
                {order.receiver_region}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <Spinning />
  );

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
            <button
              type='button'
              className='flex p-2 -mr-1 text-white bg-indigo-500 rounded-md sm:-mr-2'
              onClick={() => {}}
            >
              Add New
            </button>
            <br />
            {dataEl}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ order }) => order;

const mapDispatchToProps = (dispatch) => ({
  queryOrderList(order) {
    dispatch({
      type: 'order/queryOrderList',
      payload: order
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
