import { Config } from "./config.types";

export const config: Config[] = [
  {
    name: "count",
    placeholder: "Количество",
    required: true,
    pattern: /^\d*\.?\d*$/,
  },
];
