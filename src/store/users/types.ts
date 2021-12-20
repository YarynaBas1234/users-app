export interface IUser {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: string;
};

export type IDataApi = {
  data: IUser[];
};

export type IUsersStore = {
  users: IUser[] | null;
};
