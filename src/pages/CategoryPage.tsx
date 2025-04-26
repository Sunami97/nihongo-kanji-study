import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ChapterButton = styled.button`
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const chapters = [
  { id: 'chapter1', name: '1장' },
  { id: 'chapter2', name: '2장' },
  { id: 'chapter3', name: '3장' },
  { id: 'chapter4', name: '4장' },
];

export default function CategoryPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>장 선택</h1>
      {chapters.map((chapter) => (
        <ChapterButton
          key={chapter.id}
          onClick={() => navigate(`/year-select/${chapter.id}`)}
        >
          {chapter.name}
        </ChapterButton>
      ))}
    </Container>
  );
}
