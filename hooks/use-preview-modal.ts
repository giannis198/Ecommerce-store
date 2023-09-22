import { create } from "zustand";
import { Product } from "@/types";

interface PreviewModalstore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalstore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) =>
    set({
      data: data,
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
}));
