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