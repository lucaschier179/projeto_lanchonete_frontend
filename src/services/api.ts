import { getToken } from "@/actions/tokens";
import axios from "axios";

export const api = axios.create({/*URL DA API*/})

api.interceptors.request.use(async (config) => {
  if (!config.headers.Authorization) {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
