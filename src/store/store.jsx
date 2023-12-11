import { create } from "zustand";
import client from "../utils/auth";
import { toast } from "react-toastify";

// Global state untuk fitur aktif dan nonaktif di Navbar
export const useStatus = create((set) => ({
  isActive: false,
  fetch: async () => {
    try {
      const res = await client.get('/doctors/status');
      set({ isActive: res?.data?.results?.status ?? false });
    } catch (error) {
      toast.error('Gagal mengambil status dokter, harap muat ulang halaman!', { delay: 800});
    }
  },
  handleStatus: () => {
    set((state) => ({
      isActive: !state.isActive
    }))
  }
}))