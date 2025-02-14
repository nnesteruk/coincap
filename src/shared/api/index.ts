import axios from 'axios';
import { env } from 'shared/config/config';

export const instance = axios.create({
  baseURL: `${env.API_URL}`,
  headers: {
    Authorization: `Bearer ${env.API_KEY}`,
  },
});
