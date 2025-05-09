/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useDarkMode } from '@/store/useDarkMode';

const DarkModeToggleButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #555;
  }
`;

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeToggleButton onClick={toggleDarkMode}>
      {isDarkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
    </DarkModeToggleButton>
  );
}
