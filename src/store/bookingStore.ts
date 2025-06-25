
import { create } from 'zustand';

interface BookingStore {
  isOpen: boolean;
  reason: string;
  openModal: () => void;
  closeModal: () => void;
  setReason: (reason: string) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  isOpen: false,
  reason: '',
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setReason: (reason: string) => set({ reason }),
}));
