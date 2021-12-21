import { Dispatch } from 'redux';

export type ISimpleFunction = () => void;

export type IDispatchAction = (dispatch: Dispatch) => void;

export type IResponseApi<Type> = {
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
