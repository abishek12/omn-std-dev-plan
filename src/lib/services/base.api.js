import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api", // The unique key for the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.openmynetwork.com/api/v1/",
  }),
  tagTypes: ["DevelopmentPlan", "Users"],
  endpoints: () => ({}), // We start empty and "inject" endpoints later
});
