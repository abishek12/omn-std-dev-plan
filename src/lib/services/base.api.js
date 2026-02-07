import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api", // The unique key for the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/v1/",
  }),
  tagTypes: ["DevelopmentPlan", "Users"],
  endpoints: () => ({}), // We start empty and "inject" endpoints later
});
