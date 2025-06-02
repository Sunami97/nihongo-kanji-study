/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { kanjiData } from '@/data/kanjiData';
import KanjiCard from '@/components/KanjiCard/KanjiCard';
import { KanjiWord } from '@/data/kanjiData';
import { shuffleArray } from '@/utils/shuffleArray';
import {convertChapterName} from '@/utils/convertChapterName'
import { FaShuffle } from "react-icons/fa6";
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background-color: ${({ theme }) => theme.background};  
  color: ${({ theme }) => theme.text};                
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 3rem;
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
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.alt};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.altHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
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
  const { chapter, subcategory } = useParams<{ chapter: string; subcategory: string }>();
  const navigate = useNavigate();
  const [isAllOpen, setIsAllOpen] = useState(false);

  const [kanjiList, setKanjiList] = useState<KanjiWord[]>(() => {
    if (chapter && subcategory && kanjiData[chapter]?.[subcategory]) {
      return kanjiData[chapter][subcategory];
    }
    return [];
  });

  useEffect(() => {
    if (!chapter) {
      navigate('/');
    } else if (!subcategory) {
      navigate(`/sub-category/${chapter}`);
    }
  }, [chapter, subcategory, navigate]);

  const handleStartTest = () => {
    if (chapter && subcategory) {
      navigate(`/test/${chapter}/${subcategory}`);
    }
  };

  const handleShuffleList = () => {
    if (chapter && subcategory && kanjiData[chapter]?.[subcategory]) {
      setKanjiList(shuffleArray(kanjiData[chapter][subcategory]));
    }
  };

  const handleToggleAll = () => {
    setIsAllOpen(prev => !prev);
  };

  const handleGoBackToYearSelect = () => {
    if (chapter) {
      navigate(`/sub-category/${chapter}`);
    }
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton onClick={handleGoBackToYearSelect}>돌아가기</BackButton>
      </BackButtonWrapper>

      <Title>{convertChapterName(chapter as string)} - {subcategory} 한자 암기</Title>

      {kanjiList.length > 0 && (
        <ButtonWrapper>
          <Button onClick={handleShuffleList}><FaShuffle /></Button>
          <Button onClick={handleToggleAll}>
            {isAllOpen ? '접기' : '펼치기'}
          </Button>
          <Button onClick={handleStartTest}>테스트 시작하기</Button>
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
