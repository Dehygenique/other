import { create } from "zustand";

interface DashboardState {
  activeSection: string;
  sidebarOpen: boolean;
  selectedProduct: string | null;
  selectedPersona: string | null;
  setActiveSection: (section: string) => void;
  setSidebarOpen: (open: boolean) => void;
  setSelectedProduct: (product: string | null) => void;
  setSelectedPersona: (persona: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activeSection: "/",
  sidebarOpen: true,
  selectedProduct: null,
  selectedPersona: null,
  setActiveSection: (section) => set({ activeSection: section }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setSelectedPersona: (persona) => set({ selectedPersona: persona }),
}));
