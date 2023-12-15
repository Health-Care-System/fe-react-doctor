import { create } from "zustand";
import client from "../utils/auth";
import { toast } from "react-toastify";

// Global state untuk fitur aktif dan nonaktif di Navbar
export const useStatus = create((set) => ({
  isActive: false,
  fetch: async () => {
    try {
      const res = await client.get('/doctors/status');
      set({ isActive: res?.data?.results?.status });
    } catch (error) {
      toast.warning('Sedang memuat status dokter, harap tunggu!', { delay: 800});
    }
  },
  handleStatus: () => {
    set((state) => ({
      isActive: !state.isActive
    }))
  }
}))

export const useMedicineStore = create((set) => ({
  medicineStore: [],
  addMedicine: (newMedicine) => {
    set((state) => {
      const isMedicineExist = state.medicineStore.some((medicine) => medicine.id === newMedicine.id);
      if (!isMedicineExist) {
        return {
          medicineStore: [...state.medicineStore, newMedicine],
        };
      }
      return state;
    });
  },
  removeMedicine: (medicineId) => {
    set((state) => ({
      medicineStore: state.medicineStore.filter((medicine) => medicine.id !== medicineId),
    }));
  },
  clearMedicineStore: () => {
    set({ medicineStore: [] });
  },
}));