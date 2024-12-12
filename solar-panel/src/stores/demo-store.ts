import { create } from "zustand";

// Type for the store
interface DemoState {
  cats: number;
  increase: () => void;
}

// Store file that we export and use
export const useDemoStore = create<DemoState>((set) => ({
  cats: 0,
  increase: () => set((state) => ({ cats: state.cats + 1 })),
}));
