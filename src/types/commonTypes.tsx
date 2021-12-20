import { Dispatch } from 'redux';

export type ISimpleFunction = () => void;

export type ISimpleDispatchAction = (dispatch: Dispatch) => void;

export type IDataApi<Type> = {
  data: Type;
  config: {
    baseURL: string;
    headers: {
      Accept: string;
    };
    method: string;
    url: string;
  };
  headers: {
    'content-type': string;
  };
  request: {
    responseURL: string;
    timeout: number;
  };
  status: number;
  statusText: string;
};
