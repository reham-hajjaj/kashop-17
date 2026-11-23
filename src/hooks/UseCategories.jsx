import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { useLanguageStore } from "../store/LanguageStore";

export const UseCategories = () => {
   const language = useLanguageStore((state) => state.language);
  const getCategories = async () => {
 const response = await axiosInstance.get('Categories');
   

    return response.data.response.data;
  }

  return useQuery({
    queryKey: ["Categories",language],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });
};