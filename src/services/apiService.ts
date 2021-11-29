import axios from "axios";

export const apiServiceCreator = (apiUrl: string) => {
  return axios.create({
    baseURL: apiUrl,
    timeout: 10000,
  });
};

export const mockApiServiceCreator = () => {
  return (params: any) => new Promise(resolve => {
    setTimeout(() => {
      return resolve(params);
    }, 500);
  });
};
