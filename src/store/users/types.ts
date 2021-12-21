export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type IUsersStore = {
  users: IUser[] | null;
};
