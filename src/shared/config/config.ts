type EnvType = {
  API_URL: string;
  API_KEY: string;
};
const env: EnvType = {
  API_URL: import.meta.env.VITE_API_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
} as const;

export const { API_KEY, API_URL } = env;
