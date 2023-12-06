import { useQuery } from "@tanstack/react-query";
import client from "../utils/auth";

export const useGetQuery = (key, endpoint, stale) => {
	const { data, isPending, isError, refetch } = useQuery({
		queryKey: [key],
		queryFn: async () => {
			try {
				const res = await client.get(endpoint);
				return res.data;
			} catch (error) {
				if (error.response.status === 404) {
					return [];
				} else {
					console.log(error?.response?.data?.meta?.message);
					return error;
				}
			}
		},
		staleTime: stale
	});
	return {
		data,
		isPending,
		isError,
		refetch
	}
}