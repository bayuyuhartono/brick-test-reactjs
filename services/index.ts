import { githubApi } from './api/github';

export const combinedMiddleware = [
  githubApi.middleware,
];

export * from './api/github';