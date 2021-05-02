import ajax from '../../utils/fetch';

export async function queryMemberList(params?: Member.MemberTableListParams) {
  return ajax('/api/member/member/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeMember(params: { ids: number[] }) {
  return ajax('/api/member/member/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addMember(params: Member.MemberTableListItem) {
  return ajax('/api/member/member/add', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateMember(params: Member.MemberTableListItem) {
  return ajax('/api/member/member/update', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

