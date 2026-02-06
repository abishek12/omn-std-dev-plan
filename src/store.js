import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./lib/services/base.api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
