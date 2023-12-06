import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import client from "../utils/auth";

export const fetchUserData = async () => {
	try {
		const query = import.meta.env.VITE_MOCK_PATIENT_API;
		const respone = await axios.get(`${query}/patients`);
		console.log(respone);
		return respone.data
	} catch (error) {
		// Handle error jika terjadi
		console.error("Error fetching data:", error);
		throw new Error("Failed to fetch user data");
	}
}


export const useGetNewPatients = () => {
	const { data, isPending, isError, refetch } = useQuery({
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

export const useGetAllPatients = () => {
	const { data, isPending, isError, refetch } = useQuery({
		queryKey: ['allPatients'],
		queryFn: async () => {
			try {
				const res = await client.get('/doctors/manage-user');
				return res.data;
			} catch (error) {
				if (error.response.status === 404) {
					return {
						results: []
					};
				}
			}
		}
	});

	return {
		data,
		isPending,
		isError,
		refetch
	}

}