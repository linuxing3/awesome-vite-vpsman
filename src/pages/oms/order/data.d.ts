export interface OrderPropsType {
  list: OrderItem[];
  queryOrderList: Function;
}

export interface OrderListItem {
  id: number;
}

export interface OrderListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface OrderListData {
  list: OrderListItem[];
  pagination: Partial<OrderListPagination>;
}

export interface OrderListParams {
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}

export interface OrderItem {
  id: number;
  member_id: number;
  coupon_id: number;
  order_sn: string;
  create_time: string;
  member_username: string;
  total_amount: number;
  pay_amount: number;
  freight_amount: number;
  promotion_amount: number;
  integration_amount: number;
  coupon_amount: number;
  discount_amount: number;
  pay_type: number;
  source_type: number;
  status: number;
  order_type: number;
  delivery_company: string;
  delivery_sn: string;
  auto_confirm_day: number;
  integration: number;
  growth: number;
  promotion_info: string;
  bill_type: number;
  bill_header: string;
  bill_content: string;
  bill_receiver_phone: string;
  bill_receiver_email: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_post_code: string;
  receiver_province: string;
  receiver_city: string;
  receiver_region: string;
  receiver_detail_address: string;
  note: string;
  confirm_status: number;
  delete_status: number;
  use_integration: number;
  payment_time: string;
  delivery_time: string;
  receive_time: string;
  comment_time: string;
  modify_time: string;
}
