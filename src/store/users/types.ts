export interface IUser {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: string;
}

export type IUsersStore = {
  users: IUser[] | null;
};
