declare namespace API {
  export interface CurrentUserType {
    avatarUrl: string;
    name: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    unreadCount?: number;
    menuTree?: [];
  }

  export interface UserStateType {
    mobile: string;
    access_token: string;
    access_expire?: number;
    refresh_after?: number;
    auid?: number;
    uid?: number;
    beid?: number;
    ptyid?: number;
    username?: string;
    nickname?: string;
    openid?: string;
    avator?: string;
  }

  export interface AppPropsType {
    color: string;
    gradientColor: string;
    theme: string;
    currentUser: API.CurrentUserType;
    navigation: API.MenuItemPropsType[];
    profile: API.MenuItemPropsType[];
    setColor: (color: string) => void;
    setTheme: (theme: string) => void;
    setGradientColor: (color: string) => void;
  }

  export interface MenuItemPropsType {
    key: number;
    url: string;
    title: string;
    control?: object;
  }
  export interface LoginStateType {
    status?: 'ok' | 'error';
    type?: string;
  }

  export interface NoticeIconDataType {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }
}
