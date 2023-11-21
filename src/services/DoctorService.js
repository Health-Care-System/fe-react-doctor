/* eslint-disable no-useless-catch */
import { useQuery } from "@tanstack/react-query";
import client from "../utils/auth";

export const getDoctorProfile = async () => {
  const res = await client.get('http://localhost:3000/profile');
      
  return res.data;
};

export const useProfile = () => {
  const { isError, data, isFetching, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      return await getDoctorProfile();
    }
  });
  
  return {
    isError,
    data,
    isFetching,
    refetch
  }
}
