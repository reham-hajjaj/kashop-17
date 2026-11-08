import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

function useAddToCart() {
  const token = useAuthStore((state) => state.token);

  const addToCart = async (productId) => {
    const response = await axios.post(
      'https://knowledgeshop.runasp.net/api/Carts',
      {
        ProductId: productId,
        Count: 1
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept-Language': 'en'
        }
      }
    );

    return response.data;
  };

  return useMutation({
    mutationFn: addToCart,
  });
}

export default useAddToCart;