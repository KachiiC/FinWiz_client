import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://finwiz-server.herokuapp.com/' }),
  tagTypes: ['User'],
  refetchOnMountOrArgChange: 300,
  endpoints: (builder) => ({    
    getTestUser: builder.query<any, void>({
      query() {
        return {
          url: 'test-user',
          method: 'GET'
        };
      },
      providesTags: [{ type: 'User', id: 'LIST' }]
    }),
    getUser: builder.query<any, string>({
      query(sub: string) {
        return {
          url: `user/${sub}`,
          method: 'PUT'
        };
      },
      providesTags: [{ type: 'User', id: 'LIST' }]
    })
  })
});

export { userApi };
