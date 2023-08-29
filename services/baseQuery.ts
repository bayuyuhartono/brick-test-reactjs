import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_GITHUB_URL,
  prepareHeaders: async (headers) => {
    const token  = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('X-GitHub-Api-Version', '2022-11-28');
    }
    return headers;
  },
});
