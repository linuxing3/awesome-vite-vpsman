declare namespace Member {
  export interface MemberTableListItem {
    id: number;
  }
  
  export interface MemberTableListPagination {
    total: number;
    pageSize: number;
    current: number;
  }
  
  export interface MemberTableListData {
    list: MemberTableListItem[];
    pagination: Partial<MemberTableListPagination>;
  }
  
  export interface MemberTableListParams {
  
    pageSize?: number;
    currentPage?: number;
    filter?: { [key: string]: any[] };
    sorter?: { [key: string]: any };
  }

  export interface AddressTableListItem {
    id: number;
  }
  
  export interface AddressTableListPagination {
    total: number;
    pageSize: number;
    current: number;
  }
  
  export interface AddressTableListData {
    list: AddressTableListItem[];
    pagination: Partial<AddressTableListPagination>;
  }
  
  export interface AddressTableListParams {
  
    pageSize?: number;
    currentPage?: number;
    filter?: { [key: string]: any[] };
    sorter?: { [key: string]: any };
  
  }
}