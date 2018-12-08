import {IUser} from './IUser';

export interface IGrantResponse {
  tokenType: string,
  expiresIn: number,
  accessToken: string,
  refreshToken?: string,
  state: string
}

export interface ILoginResponse extends IGrantResponse {
  timestamp: number,
  user?: IUser
}
