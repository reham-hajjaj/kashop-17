import authAxiosInstance from '../api/authAxiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function UseAddToCart() {
const queryClient=useQueryClient();
  const addToCart = async (productId) => {
    const response = await authAxiosInstance.post(
      '/Carts',
      {
        ProductId: productId,
        Count: 1
      }
    );

    return response.data;
  };
 
  return useMutation({
    mutationFn: addToCart,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['cart']})
    }
  });
}