import axios from 'axios'


    const authAxiosInstance = axios.create({
    baseURL:"https://knowledgeshop.runasp.net/api",
    headers: {
          "Accept-Language": "en",
          
        },
});
authAxiosInstance.intereceptors.request.use((config)=>{
    const token = useAuthStore((state) => state.token);
    if(token){
        config.headers.authAxiosInstance =`Bearer ${token}`,
    }
})



export default authAxiosInstance;