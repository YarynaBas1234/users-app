type IAddToLocalStorage = (key: string, value: any) => void;

const addToLocalStorage: IAddToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

type IGetFromLocalStorage = <Type>(key: string) => Type;

const getFromLocalStorage: IGetFromLocalStorage = key => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : value;
};

type IDeleteFromLocalStorage = (key: string) => void;

const deleteFromLocalStorage: IDeleteFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export const localStorageService = {
  addToLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage
};
