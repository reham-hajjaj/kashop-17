import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useClearCartItem() {
  const queryClient = useQueryClient();

  const clearCartItem = async (ProductId) => {
    const response = await authAxiosInstance.delete(`Carts/${ProductId}`);
    return response.data;
  };

  return useMutation({
    mutationFn: clearCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}