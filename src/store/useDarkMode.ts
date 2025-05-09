import { create } from 'zustand';

interface DarkModeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

const getInitialMode = () => {
  const stored = localStorage.getItem('darkMode');
  return stored === 'true'; 
};

export const useDarkMode = create<DarkModeStore>((set) => ({
  isDarkMode: getInitialMode(),

  toggleDarkMode: () =>
    set((state) => {
      const next = !state.isDarkMode;
      localStorage.setItem('darkMode', String(next)); // ✅ 상태 저장
      return { isDarkMode: next };
    }),

  setDarkMode: (value: boolean) => {
    localStorage.setItem('darkMode', String(value));
    set({ isDarkMode: value });
  },
}));
