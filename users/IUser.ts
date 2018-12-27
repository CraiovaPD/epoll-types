export enum UserRole {
  root,
  admin,
  moderator,
  regular
}

export interface IUser {
  _id: string,
  phone: string,
  role: UserRole,
  firstname: string,
  lastname?: string
}
