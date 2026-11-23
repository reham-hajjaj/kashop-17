import axios from 'axios'
import { useLanguageStore } from '../store/LanguageStore';
const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASEURL,
    
});
axiosInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = useLanguageStore.getState().language;

  return config;
})

export default axiosInstance;