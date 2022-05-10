import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['User'],
  refetchOnMountOrArgChange: 300,
  endpoints: (builder) => ({    
    getUser: builder.query<any, string>({
      query(id) {
        return {
          url: `user/${id}`,
          method: 'PUT'
        };
      },
      providesTags: [{ type: 'User', id: 'LIST' }]
    })
  })
});

export { userApi };
