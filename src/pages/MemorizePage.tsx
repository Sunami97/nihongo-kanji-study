import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { kanjiData } from '@/data/kanjiData';
import KanjiCard from '@/components/KanjiCard/KanjiCard';
import styled from 'styled-components';
import { KanjiWord } from '@/data/kanjiData';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #333;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start; 
  gap: 2rem;
`;


const Button = styled.button`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #66bb6a, #43a047);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #43a047, #2e7d32);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
`;

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #9e9e9e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #757575;
  }
`;

export default function MemorizePage() {
  const { chapter, year } = useParams<{ chapter: string; year: string }>();
  const navigate = useNavigate();
  const [isAllOpen, setIsAllOpen] = useState(false);

  const kanjiList: KanjiWord[] = chapter && year && kanjiData[chapter]?.[year] ? kanjiData[chapter][year] : [];

  const handleStartTest = () => {
    if (chapter && year) {
      navigate(`/test/${chapter}/${year}`);
    }
  };

  const handleToggleAll = () => {
    setIsAllOpen(prev => !prev);
  };

  const handleGoBackToYearSelect = () => {
    if (chapter) {
      navigate(`/year-select/${chapter}`);
    }
  };

  return (
    <Container>
      
      <BackButtonWrapper>
        <BackButton onClick={handleGoBackToYearSelect}>
          돌아가기
        </BackButton>
      </BackButtonWrapper>

      <Title>{chapter} - {year}년 한자 암기</Title>

      {kanjiList.length > 0 && (
        <ButtonWrapper>
          <Button onClick={handleToggleAll}>
            {isAllOpen ? '접기' : '펼치기'}
          </Button>
          <Button onClick={handleStartTest}>
            테스트 시작하기
          </Button>
        </ButtonWrapper>
      )}

      <CardsWrapper>
        {kanjiList.map((word, idx) => (
          <KanjiCard key={idx} word={word} defaultOpen={isAllOpen} />
        ))}
      </CardsWrapper>
    </Container>
  );
}
