import { baseApi } from "../base.api";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    getMe: builder.query({
      query: () => "users/me",
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetMeQuery,
  useLazyGetMeQuery,
} = usersApi;
