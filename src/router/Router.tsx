import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from '@/pages/CategoryPage';
import YearSelectPage from '@/pages/YearSelectPage';
import MemorizePage from '../pages/MemorizePage';
import TestPage from '../pages/TestPage';
import ResultPage from '../pages/ResultPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CategoryPage />} />
        <Route path="/year-select/:chapter" element={<YearSelectPage />} />
        <Route path="/memorize/:chapter/:year" element={<MemorizePage />} />
        <Route path="/test/:chapter/:year" element={<TestPage />} />
        <Route path="/result/:chapter/:year" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
