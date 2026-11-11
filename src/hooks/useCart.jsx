import { useAuthStore } from '../store/useAuthStore';
import authAxiosInstance from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query';

function useCart() {
  const token = useAuthStore((state) => state.token);

  const getCart = async () => {
    const response = await authAxiosInstance.get('/Carts');

    console.log('CART RESPONSE:', response.data);

    return response.data;
  };

  return useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
}

export default useCart;