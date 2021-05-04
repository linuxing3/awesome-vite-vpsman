declare namespace Member {
  export interface MemberItem {
    id?:                     number;
    username:               string;
    phone:                  string;
    password:               string;
    member_level_id?:        number;
    nickname?:               string;
    status?:                 number;
    create_time?:            string;
    icon?:                   string;
    gender?:                 number;
    birthday?:               string;
    city?:                   string;
    job?:                    string;
    personalized_signature?: string;
    source_type?:            number;
    integration?:            number;
    growth?:                 number;
    luckey_count?:           number;
    history_integration?:    number;
  }

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