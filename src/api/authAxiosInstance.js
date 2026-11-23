import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import { useLanguageStore } from '../store/LanguageStore';

const authAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    'Accept-Language': 'en',
  },
});

authAxiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

config.headers["Accept-Language"] = useLanguageStore.getState().language;

  return config;
});

export default authAxiosInstance;