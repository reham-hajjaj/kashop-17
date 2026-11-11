import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useRemoveItem() {
      const queryClient = useQueryClient();
      const removeCartItem =async(ProductId)=>{
        const response =await authAxiosInstance.delete(`Carts/${ProductId}`);
        return response.data;
      }
  return useMutation({
      mutationFn:removeCartItem,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['cart'] });
      },
    });
}

export default useRemoveItem;