import { useQuery } from "@tanstack/react-query";

import axiosInstance from "../api/axiosInstance";
import { useLanguageStore } from "../store/LanguageStore";

export const UseProducts = () => {
    const language = useLanguageStore((state) => state.language);
  const getProducts = async () => {
  const response = await axiosInstance.get(`Products`);
    

    return response.data.response.data;
  }

  return useQuery({
    queryKey: ["Products",language],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
};