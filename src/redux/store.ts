// INTERFACES
import { IUserProfile } from 'interfaces/user/IUserProfile';
import { IUserNewInvestment } from 'interfaces/investments/IUserNewInvestment';
import { IUpdateUserAsset } from 'interfaces/investments/IUpdateUserAsset';
import { IUserNews } from 'interfaces/user/IUserNews';
// REDUX
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  reducerPath: 'userApi',
  tagTypes: ['User'],
  refetchOnMountOrArgChange: 300,
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserNews: builder.query<IUserNews[], string>({
      query(symbols) {
        return {
          url: `user-news/${symbols}`,
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
    userAddStock: builder.mutation<IUserNewInvestment, unknown>({
      query(asset) {
        return {
          url: 'user-add-stock',
          method: 'POST',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),
    userAddCrypto: builder.mutation<IUserNewInvestment, unknown>({
      query(asset) {
        return {
          url: 'user-add-crypto',
          method: 'POST',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    userAddCommodity: builder.mutation<any, unknown>({
      query(asset) {
        return {
          url: 'user-add-commodity',
          method: 'POST',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),
    updateUserStock: builder.mutation<IUpdateUserAsset, unknown>({
      query(asset) {
        return {
          url: 'user-update-stock',
          method: 'PATCH',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),
    updateUserCrypto: builder.mutation<IUpdateUserAsset, unknown>({
      query(asset) {
        return {
          url: 'user-update-crypto',
          method: 'PATCH',
          body: asset
        };
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    })
  })
});