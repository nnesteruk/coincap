import axios from "axios";
import { Env } from "shared/config";

export const instance = axios.create({
  baseURL: `${Env.API_URL}`,
  headers: {
    Authorization: `Bearer ${Env.API_KEY}`,
  },
});
