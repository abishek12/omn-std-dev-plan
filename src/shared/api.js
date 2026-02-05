import axios from "axios";

export function createApiClient(baseURL, headers = {}) {
  return axios.create({
    baseURL,
    headers,
    timeout: 5000,
  });
}
