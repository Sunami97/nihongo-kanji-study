import { create } from 'zustand';

interface CategoryState {
  selectedCategoryTitle: string;
  setSelectedCategoryTitle: (title: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategoryTitle: '',
  setSelectedCategoryTitle: (title) => set({ selectedCategoryTitle: title }),
}));
