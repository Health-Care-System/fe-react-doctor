import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetQuery = ({ key, endpoint}) => {
  const { data, isPending, isError,refetch } = useQuery({
		queryKey: [key],
		queryFn: async () => {
			const res = await axios.get(`http://localhost:3001${endpoint}`);
			return res.data;
		}
	});
	return {
		data,
		isPending,
		isError,
		refetch
	}
}