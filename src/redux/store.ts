import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserProfile } from 'interfaces/user/IUserProfile';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  tagTypes: ['User'],
  refetchOnMountOrArgChange: 300,
  endpoints: (builder) => ({    
    getTestUser: builder.query<IUserProfile, void>({
      query() {
        return {
          url: 'test-user',
          method: 'GET'
        };
      },
      providesTags: [{ type: 'User', id: 'LIST' }]
    }),
    getUser: builder.query<IUserProfile, string>({
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
