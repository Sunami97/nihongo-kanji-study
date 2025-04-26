import { create } from 'zustand';

interface Answer {
  kanji: string;
  userYomikata: string;
  userMeaning: string;
  correctYomikata: string;
  correctMeaning: string;
  isCorrect: boolean;
}

interface TestState {
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  resetAnswers: () => void;
}

export const useTestStore = create<TestState>((set) => ({
  answers: [],
  addAnswer: (answer) =>
    set((state) => ({
      answers: [...state.answers, answer],
    })),
  resetAnswers: () =>
    set(() => ({
      answers: [],
    })),
}));
