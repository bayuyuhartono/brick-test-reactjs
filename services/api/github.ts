import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { gridType } from '@/types/gridTypes';
import { UserTypes } from '@/types/usersTypes';

const reducerPath = 'githubApi';
const urlpath = 'search';

export const githubApi = createApi({
  reducerPath,
  baseQuery,
  tagTypes: [ 'github' ],
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getGithubSearch: builder.query<gridType, { text: string }>({
      query: ({ text }) => ({
        url: `${urlpath}/repositories?q="${text}"&page=1&per_page=3`,
        method: 'GET',
      }) ,
      providesTags: [ 'github' ],
    }),
    getGithubSearchuser: builder.query<UserTypes, { text: string }>({
      query: ({ text }) => ({
        url: `${urlpath}/users?q="${text}"&page=1&per_page=3`,
        method: 'GET',
      }) ,
      providesTags: [ 'github' ],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  //Lazy
  useLazyGetGithubSearchQuery,
  useLazyGetGithubSearchuserQuery,

  //query
  useGetGithubSearchQuery,
  useGetGithubSearchuserQuery,
} = githubApi;

export const githubQueryReducer = { [reducerPath]: githubApi.reducer };
