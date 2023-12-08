import client from "../utils/auth";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetNewPatients = () => {
	return useInfiniteQuery({
		queryKey: ['newPatients'],
		queryFn: getNewPatinets,
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = lastPage?.results?.length ? allPages.length : undefined;
			return nextPage;
		},
	});
}

const getNewPatinets = async ({ pageParam = 0 }) => {
	try {
		const offset = pageParam * 4;
		const res = await client.get(`/doctors/doctor-consultation?offset=${offset}&limit=4`);
		return res.data;
	} catch (error) {
		if (error.response && error.response.status === 404) {
			return null;
		}
		throw error;
	}
}

// Fungsi get data semua pasien, dengan pagination. Kode ini bagian dari useGetAllPatients
const getAllPatients = async ({ pageParam = 0 }) => {
	try {
		const offset = pageParam * 10;
		const res = await client.get(`/doctors/manage-user?offset=${offset}&limit=10`);
		return res.data;
	} catch (error) {
		if (error.response && error.response.status === 404) {
			return {
				results: [],
			};
		}
		throw error;
	}
}

// Fungsi untuk mendapatkan semua data pasien, dengan pagination
export const useGetAllPatients = () => {
	return useInfiniteQuery({
		queryKey: ['allPatients'],
		queryFn: getAllPatients,
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = lastPage?.results?.length ? allPages.length : undefined;
			return nextPage;
		},
	});
}

// Fungsi edit status pasien 
export const editPatientStatusAndDiagnosa = async (newData) => {
	const data = new FormData();
	data.append("health_details", newData.diagnosa);
	data.append("patient_status", newData.status);
	try {
		const res = await client.put(`/doctors/manage-user/${newData.transaction_id}`, data);
		
		if (res?.status === 200) {
			return res.data;
		} else {
			throw new Error("Gagal memperbarui transaksi!")
		}
	} catch (error) {
		throw new Error(error.response ? error.response.data : 'Something went wrong');
	}
}

export const getPatientByTransactionID = async (id) => {
  const res = await client.get(`/doctors/manage-user?transaction_id=${id}&offset=0&limit=5`);
  return res?.data;
}
export const getDoctorTransactionByID = async (setLoadingSearch, setFilterData, id) => {
  try {
    setLoadingSearch(true);
    const data = await getPatientByTransactionID(id);
    setFilterData(data && data.results ? data.results : []);
  } catch (error) {
    if (error.response.status === 404) {
      setFilterData([]);
    }
    console.error("Error fetching user data:", error);
  } finally {
    setLoadingSearch(false);
  }
};