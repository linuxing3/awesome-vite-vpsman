import React, { useState, useEffect } from 'react';
import {
  queryMemberList,
  updateMember,
  removeMember
} from '../../service/member/member';

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async () => {
  console.log("Redirecting ...")
  window.location.href = '/member/add'
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
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Name
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Job
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Phone
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
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
              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                {member.phone}
              </span>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
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
  ) : null;

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
          <button
              type="button"
              className="-mr-1 flex p-2 rounded-md bg-indigo-500 text-white sm:-mr-2"
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
