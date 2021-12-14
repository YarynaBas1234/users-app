import { QueryClient } from 'react-query';

import { apiServiceCreator, mockApiServiceCreator } from "./apiService";
export * as languageService from './languageService';
export * from './envConfigs';

export const apiService = apiServiceCreator("");
export const queryClient = new QueryClient();

export const mockApiService = mockApiServiceCreator();

export * from './storageService';
