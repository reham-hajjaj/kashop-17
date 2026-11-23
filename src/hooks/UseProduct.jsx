import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { useLanguageStore } from '../store/LanguageStore';


export default function UseProduct(id) {
     const language = useLanguageStore((state) =>state.language);
  const getProductDetails = async () => {
    const response = await axiosInstance.get(`/Products/${id}`);
console.log("Product API response:", response.data);
    return response.data.response;
  };
  return useQuery({
    queryKey: ['product', id,language],
    queryFn: getProductDetails,
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
}