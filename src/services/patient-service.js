import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import client from "../utils/auth";

export const fetchUserData = async () => {
	try {
		const query = import.meta.env.VITE_MOCK_PATIENT_API;
		const respone =  await axios.get(`${query}/patients`);
		console.log(respone);
		return respone.data
	} catch (error) {
		// Handle error jika terjadi
		console.error("Error fetching data:", error);
		throw new Error("Failed to fetch user data");
	}
}


export const useGetNewPatients = () => {
	const { data, isPending, isError,refetch } = useQuery({
		queryKey: ['newPatients'],
		queryFn: async () => {
			const res = await client.get('/doctors/doctor-consultation');
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