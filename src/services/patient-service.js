import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchUserData = async () => {
	try {
		const query = import.meta.env.VITE_MOCK_PATIENT_API;
		const respone =  await axios.get(`${query}/patients`);
		return respone.data
	} catch (error) {
		// Handle error jika terjadi
		console.error("Error fetching data:", error);
		throw new Error("Failed to fetch user data");
	}
}

export const useGetRecentsPatients = () => {
	const { data, isPending, isError,refetch } = useQuery({
		queryKey: ['recentPatients'],
		queryFn: async () => {
			const res = await axios.get('http://localhost:3001/active-patients');
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
export const useGetNewPatients = () => {
	const { data, isPending, isError,refetch } = useQuery({
		queryKey: ['newPatients'],
		queryFn: async () => {
			const res = await axios.get('http://localhost:3001/new-patients');
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