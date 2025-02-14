type EnvType = {
  API_URL: string;
  API_KEY: string;
};
export const env: EnvType = {
  API_URL: import.meta.env.VITE_API_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
} as const;
