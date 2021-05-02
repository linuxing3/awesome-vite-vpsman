import ajax from '../../utils/fetch';

export async function queryAddress(params?: Member.AddressTableListParams) {
  return ajax('/api/member/address/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeAddress(params: { ids: number[] }) {
  return ajax('/api/member/address/delete', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addAddress(params: Member.AddressTableListItem) {
  return ajax('/api/member/address/add', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateAddress(params: Member.AddressTableListItem) {
  return ajax('/api/member/address/update', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}


