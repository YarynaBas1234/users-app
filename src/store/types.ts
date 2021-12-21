import { IAuthStore } from './auth';
import { IUsersStore } from './users';

export type IStore = {
  auth: IAuthStore;
  users: IUsersStore;
};
