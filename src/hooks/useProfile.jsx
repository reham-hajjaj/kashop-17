import { useAuthStore } from '../store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

function useProfile() {
  const token = useAuthStore((state) => state.token);

  const getProfile = async () => {
    const response = await authAxiosInstance.get('/Profile');

    console.log("Profile Data:", response.data);

    return response.data;
  };

  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
}

export default useProfile;