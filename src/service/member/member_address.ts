import request from '../../utils/request';

export async function queryAddress(params?: Member.AddressTableListParams) {
  return request('/api/member/address/list', {...params}, 'POST')
}

export async function removeAddress(params: { ids: number[] }) {
  return request('/api/member/address/delete', {...params}, 'POST')
}

export async function addAddress(params: Member.AddressTableListItem) {
  return request('/api/member/address/add', {...params}, 'POST')
}

export async function updateAddress(params: Member.AddressTableListItem) {
  return request('/api/member/address/update', {...params }, 'POST')
}
