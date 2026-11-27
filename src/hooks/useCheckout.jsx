import { useMutation } from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance";

function useCheckout() {
  return useMutation({
    mutationFn: async ({ paymentMethod }) => {
      return await authAxiosInstance.post(`/Checkouts`,{paymentMethod,});
    },
    onSuccess:(response)=>{
 if(response?.data.url){
    location.href = response.data.url
 }
    }
       
  });
}

export default useCheckout;