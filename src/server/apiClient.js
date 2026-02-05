import { createApiClient } from "../shared/api";

export function getServerApiClient(req) {
  return createApiClient(process.env.API_BASE_URL, {
    cookie: req?.headers?.cookie || "",
    authorization: req?.headers?.authorization || "",
  });
}
