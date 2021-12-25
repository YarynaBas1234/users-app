export interface IUser {
  id: number;
  name: string;
  username: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  },
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  email: string;
  phone: string;
}

export type IUsersStore = {
  users?: IUser[];
};
