import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // ! example get request
    // getUser: builder.query<any, void>({
    //   query: () => 'user',
    //   providesTags: [{ type: 'User', id: 'LIST' }]
    // }),
    getUserId: builder.query<any, string>({
      query(id) {
        return {
          url: `user/${id}`
        };
      },
      providesTags: [{ type: 'User', id: 'LIST' }]
    })
  })
});

export { userApi };