import { useAuthStore } from '../store/useAuthStore';
import authAxiosInstance from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useLanguageStore } from '../store/LanguageStore';

function useCart() {
   const language = useLanguageStore((state) =>state.language);
  const token = useAuthStore((state) => state.token);

  const getCart = async () => {
    const response = await authAxiosInstance.get('Carts');

 

    return response.data;
  };

  return useQuery({
    queryKey: ['cart',language],
    queryFn: getCart,
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
}

export default useCart;