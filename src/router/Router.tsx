import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from '@/pages/CategoryPage';
import SubCategoryPage from '@/pages/SubCategoryPage';
import MemorizePage from '@/pages/MemorizePage';
import TestPage from '@/pages/TestPage';
import ResultPage from '@/pages/ResultPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/sub-category/:chapter" element={<SubCategoryPage />} />
        <Route path="/memorize/:chapter/:subcategory" element={<MemorizePage />} />
        <Route path="/test/:chapter/:subcategory" element={<TestPage />} />
        <Route path="/result/:chapter/:subcategory" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
