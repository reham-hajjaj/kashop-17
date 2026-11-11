import authAxiosInstance from '../api/authAxiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useUpdateCartItem() {
  const queryClient = useQueryClient();

  const updateCartItem = async ({ ProductId, count }) => {
    const response = await authAxiosInstance.patch(
      `Carts/${ProductId}`,
      { count }
    );

    return response.data;
  };

  return useMutation({
    mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}

export default useUpdateCartItem;