import axios from 'axios';
import { API_KEY, API_URL } from 'shared/config/config';

export const instance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
