import { create } from 'zustand';

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkMode = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((s) => ({ isDarkMode: !s.isDarkMode })),
}));
