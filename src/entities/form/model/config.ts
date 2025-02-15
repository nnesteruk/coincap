import { Config } from './config.type';

export const config: Config[] = [
  {
    name: 'count',
    placeholder: 'Количество',
    required: true,
    pattern: /^\d*\.?\d*$/,
  },
];
