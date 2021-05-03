import React, { useState, useEffect } from 'react';
import Spinning from '../../components/Spinning';
import {
  queryMemberList,
  removeMember
} from '../../service/member/member';

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async () => {
  console.log("Redirecting ...")
  window.location.href = '/member/form'
};

/**
 *  删除节点(单个)
 * @param id
 */
const handleRemoveOne = async (id: number) => {
  try {
    await removeMember({
      ids: [id]
    });
    return true;
  } catch (error) {
    return false;
  }
};

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async (selectedRows: Member.MemberTableListItem[]) => {
  if (!selectedRows) return true;
  try {
    await removeMember({
      ids: selectedRows.map((row) => row.id)
    });
    return true;
  } catch (error) {
    return false;
  }
};

const MemberTable = () => {
  const [members, setMembers] = useState<Member.MemberItem[]>([]);

  const queryParams = {
    current: 0,
    pageSize: 10
  };

  useEffect(() => {
    queryMemberList(queryParams).then(result => {
      console.log(result);
      if (result.data) {
        setMembers(result.data);
      }
    });
    return () => {
      console.log(members);
    };
  }, []);

  const dataEl = members ? (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
          >
            Job
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
        {members.map((member) => (
          <tr key={member.id}>
            <td className='px-6 py-4 whitespace-nowrap'>
              <div className='flex items-center'>
                <div className='ml-4'>
                  <div className='text-sm font-medium text-gray-900'>{member.username}</div>
                </div>
              </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <div className='text-sm text-gray-900'>
                {member.job}
              </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                {member.phone}
              </span>
            </td>
            <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
              <a
                href={member.city}
                className='text-indigo-600 hover:text-indigo-900'
              >
                {member.city}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : <Spinning />;

  
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
          <button
              type="button"
              className="flex p-2 -mr-1 text-white bg-indigo-500 rounded-md sm:-mr-2"
              onClick={() => handleAdd()}
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

export default MemberTable;
