export type FormData = {
  count: number | string;
};
export type Config = {
  placeholder: string;
  required: boolean;
  pattern?: RegExp;
  name: keyof FormData;
};
