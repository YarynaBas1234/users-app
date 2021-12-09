import { QueryClient } from 'react-query';

import { apiServiceCreator, mockApiServiceCreator } from "./apiService";

export const apiService = apiServiceCreator("");
export const queryClient = new QueryClient();

export const mockApiService = mockApiServiceCreator();

export * as languageService from './languageService';

export * from './storageService';
