import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { kanjiData, KanjiWord } from '@/data/kanjiData';
import styled from 'styled-components';
import { AnswerRecord } from '@/types/kanji.types';
const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const KanjiText = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 300px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SingleButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default function TestPage() {
  const { chapter, year } = useParams<{ chapter: string; year: string }>();
  const navigate = useNavigate();

  const wordList: KanjiWord[] = chapter && year && kanjiData[chapter]?.[year] ? kanjiData[chapter][year] : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userMeaning, setUserMeaning] = useState('');
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const currentWord = wordList[currentIndex];

  const handleCheckAnswer = () => {
    const meaningCorrect = userMeaning.trim() === currentWord.meaning.trim();

    const newRecord: AnswerRecord = {
      kanji: currentWord.kanji,
      yomikata: currentWord.yomikata,
      correctMeaning: currentWord.meaning,
      userMeaning: userMeaning.trim(),
      isCorrect: meaningCorrect,
    };

    const newAnswers = [...answers, newRecord];

    if (currentIndex + 1 < wordList.length) {
      setAnswers(newAnswers);
      setCurrentIndex(prev => prev + 1);
      setUserMeaning('');
    } else {
      navigate(`/result/${chapter}/${year}`, {
        state: { answers: newAnswers }
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setUserMeaning('');
    }
  };

  const handleGoBackToMemorize = () => {
    if (chapter && year) {
      navigate(`/memorize/${chapter}/${year}`);
    }
  };

  if (!wordList.length) {
    return <Container>문제가 없습니다.</Container>;
  }

  return (
    <Container>
      <h1>{chapter} {year} 테스트</h1>
      <KanjiText>{currentWord.kanji}</KanjiText>

      <div>
        <Input
          type="text"
          value={userMeaning}
          placeholder="뜻 입력"
          onChange={(e) => setUserMeaning(e.target.value)}
        />
      </div>

      <ButtonRow>
        <Button onClick={handlePrevious} disabled={currentIndex === 0}>
          이전
        </Button>
        <Button onClick={handleCheckAnswer}>
          다음
        </Button>
      </ButtonRow>

      <SingleButtonRow>
        <Button onClick={handleGoBackToMemorize}>
          돌아가기
        </Button>
      </SingleButtonRow>

      <p>{currentIndex + 1} / {wordList.length} 문제</p>
    </Container>
  );
}
