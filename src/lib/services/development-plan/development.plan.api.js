import { baseApi } from "../base.api";

export const developmentPlanApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersDevelopmentPlan: builder.query({
      query: ({ userId }) => `/development-plan/users?user_id=1`,
      providesTags: ["DevelopmentPlan"],
    }),
  }),
});

export const { useGetUsersDevelopmentPlanQuery } = developmentPlanApi;
