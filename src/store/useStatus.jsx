import { create } from "zustand";

// Global state untuk fitur aktif dan nonaktif di Navbar
export const useStatus = create((set) => ({
  isActive: false,
  handleStatus: () => {
    set((state) => ({
      isActive: !state.isActive
    }))
  }
}))