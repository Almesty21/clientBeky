export interface ILoginInput {
  email: string;
  password: string;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
}

export interface UserPayload {
  username: string;
  email: string;
  password: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
  token: IToken;
}
