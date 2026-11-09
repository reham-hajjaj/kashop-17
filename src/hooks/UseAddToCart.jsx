import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useAddToCart() {


  const addToCart = async (productId) => {
    const response = await authAxiosInstance.post(`Carts`,{ProductId:productId,Count:1});
     return response.data;
  }

  return useMutation({
    mutationFn:addToCart,
  })
}

