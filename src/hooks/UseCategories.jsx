import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";

export const UseCategories = () => {
  const getCategories = async () => {
 const response =await axiosInstance.get('Categories');
   

    return response.data.response.data;
  };

  return useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });
};