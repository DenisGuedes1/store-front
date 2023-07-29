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
  avatar?: string;
  id: string;
}

export interface iUserResponse {
  token: string;
}
