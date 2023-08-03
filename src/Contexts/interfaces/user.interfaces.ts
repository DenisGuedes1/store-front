export interface IUserREgister {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IuserLogin {
  email: string;
  password: string;
}

export interface IreturnRegisterUser {
  name: string;
  email: string;
  avatar: string;
  id: string;
}

export interface iUserResponse {
  token: string;
}

export interface IuserInfo {
  adress: boolean;
  avatar: boolean;
  email: string;
  id: string;
  isAdmin: boolean;
  name: string;
  password: string;
  reset_token: boolean;
}
