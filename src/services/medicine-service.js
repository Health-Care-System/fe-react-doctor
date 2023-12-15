import client from "../utils/auth";

// export const useGetAllMedicine = () => {
//   return useInfiniteQuery({
//     queryKey: ['allMedicines'],
//     queryFn: getAllMedicines,
//     initialPageParam: 0,
//     getNextPageParam: (lastPage, allPages) => {
//       const nextPage = lastPage?.results?.length ? allPages.length : undefined;
//       return nextPage;
//     },
//   })
// }

export const getAllMedicines = async ( pageParam = 0 ) => {
  try {
    const offset = pageParam * 12;
    const res = await client.get(`/doctors/medicines?offset=${offset}&limit=12`);
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) return null;
    throw error;
  }
};

export const getMedicineByKey = async (setLoading, handleChange, keyword) => {
  try {
    setLoading(true);
    const data = await searchMedicine(keyword);
    handleChange('filterData', data && data?.results ? data?.results : []);
  } catch (error) {
    if (error?.response?.status === 404) {
      handleChange('filterData', []);
    }
    console.error("Error fetching user data:", error);
  } finally {
    setLoading(false);
  }
};

export const searchMedicine = async (keyword) => {
  const res = await client.get(`/users/medicines?offset=0&limit=5&keyword=${keyword}`);
  return res?.data;
}