import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserProfile } from 'interfaces/user/IUserProfile';
import { IUserNewInvestment } from 'interfaces/investments/IUserNewInvestment';

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
          method: 'GET'
        };
      },
      providesTags: [{ type: 'User', id: 'LIST' }]
    }),
    userAddStock: builder.mutation<IUserNewInvestment, any>({
      query(asset) {
        return {
          url: 'user-add-stock',
          method: 'POST',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),
    userAddCrypto: builder.mutation<IUserNewInvestment, any>({
      query(asset) {
        return {
          url: 'user-add-crypto',
          method: 'POST',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    })
  })
});

export { userApi };
