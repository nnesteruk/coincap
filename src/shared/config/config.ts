import { EnvType } from "./config.types";

export const Env: EnvType = {
  API_URL: import.meta.env.VITE_API_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
} as const;
