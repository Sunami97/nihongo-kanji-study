// AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/styles/globalStyles';
import { useDarkMode } from '@/store/useDarkMode';
import { lightTheme, darkTheme } from '@/styles/themes';

import CategoryPage from '@/pages/CategoryPage';
import SubCategoryPage from '@/pages/SubCategoryPage';
import MemorizePage from '@/pages/MemorizePage';
import TestPage from '@/pages/TestPage';
import ResultPage from '@/pages/ResultPage';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function AppRouter() {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <DarkModeToggle /> 
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/sub-category/:chapter" element={<SubCategoryPage />} />
          <Route path="/memorize/:chapter/:subcategory" element={<MemorizePage />} />
          <Route path="/test/:chapter/:subcategory" element={<TestPage />} />
          <Route path="/result/:chapter/:subcategory" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
