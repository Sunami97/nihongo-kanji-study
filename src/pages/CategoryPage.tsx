import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ChapterButton = styled.button`
   margin: 0.5rem;
  padding: 1rem 2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default function CategoryPage() {
  const navigate = useNavigate();

  const handleSelectChapter = (chapter: string) => {
    navigate(`/year-select/${chapter}`);
  };

  return (
    <Container>
      <Title>일본어 단어 암기</Title>

      <ButtonWrapper>
        <ChapterButton onClick={() => handleSelectChapter('chapter1')}>1장</ChapterButton>
        <ChapterButton onClick={() => handleSelectChapter('chapter2')}>2장</ChapterButton>
        <ChapterButton onClick={() => handleSelectChapter('chapter3')}>3장</ChapterButton>
        <ChapterButton onClick={() => handleSelectChapter('chapter4')}>4장</ChapterButton>
      </ButtonWrapper>
    </Container>
  );
}
