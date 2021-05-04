import request from '../../utils/request';

export async function queryMemberList(params?: Member.MemberTableListParams) {
  return request('/api/member/member/list', {...params}, 'POST')
}

export async function removeMember(params: { ids: number[] }) {
  return request('/api/member/member/delete', {...params}, 'POST')
}

export async function addMember(params: Member.MemberItem) {
  return request('/api/member/member/add', {...params}, 'POST')
}

export async function updateMember(params: Member.MemberItem) {
  return request('/api/member/member/update', {...params}, 'POST')
}

