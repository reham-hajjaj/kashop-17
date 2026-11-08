import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';


export default function UseProduct(id) {
  const getProductDetails = async () => {
    const response = await axiosInstance.get(`/Products/${id}`);

    return response.data.response;
  };

  return useQuery({
    queryKey: ['Product', id],
    queryFn: getProductDetails,
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
}