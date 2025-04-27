import { useEffect, useState } from 'react';
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
  font-weight: 400;
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

export default function TestPage() {
  const { chapter, subcategory } = useParams<{ chapter: string; subcategory: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!chapter) {
      navigate('/'); // chapter 없으면 홈으로
    } else if (!subcategory) {
      navigate(`/sub-category/${chapter}`); // chapter는 있는데 subcategory 없으면 sub-category로
    }

  }, [chapter, subcategory, navigate]);
  const wordList: KanjiWord[] = chapter && subcategory && kanjiData[chapter]?.[subcategory] ? kanjiData[chapter][subcategory] : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userMeaning, setUserMeaning] = useState('');
  const [userYomikata, setUserYomikata] = useState('');
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const currentWord = wordList[currentIndex];

  const handleCheckAnswer = () => {
    const clean = (text: string) => text.replace(/\s/g, ''); // 모든 공백 제거
  
    const correctMeanings = currentWord.meaning
      .split(',')
      .map((item) => clean(item)); // 정답들도 공백 제거된 상태로!
  
    const meaningCorrect = correctMeanings.includes(clean(userMeaning)); // 사용자 입력도 공백 제거
    const yomikataCorrect = clean(userYomikata) === clean(currentWord.yomikata); // 요미카타도 둘 다 공백 제거
  
    const isCorrect = meaningCorrect && yomikataCorrect; // 둘 다 맞아야 true
  
    const newRecord: AnswerRecord = {
      kanji: currentWord.kanji,
      yomikata: currentWord.yomikata,
      correctMeaning: currentWord.meaning,
      userMeaning: userMeaning.trim(), // 기록은 원본 사용
      userYomikata: userYomikata.trim(),
      isCorrect,
    };
  
    const newAnswers = [...answers, newRecord];
  
    if (currentIndex + 1 < wordList.length) {
      setAnswers(newAnswers);
      setCurrentIndex(prev => prev + 1);
      setUserMeaning('');
      setUserYomikata('');
    } else {
      navigate(`/result/${chapter}/${subcategory}`, {
        state: { answers: newAnswers }
      });
    }
  };
  
  

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setUserMeaning('');
      setUserYomikata('');
    }
  };

  const handleGoBackToMemorize = () => {
    if (chapter && subcategory) {
      navigate(`/memorize/${chapter}/${subcategory}`);
    }
  };

  if (!wordList.length) {
    return <Container>문제가 없습니다.</Container>;
  }

  return (
    <Container>
      <h1>{chapter} {subcategory} 테스트</h1>
      <KanjiText>{currentWord.kanji}</KanjiText>

      <div>
        <Input
          type="text"
          value={userYomikata}
          placeholder="요미카타 입력"
          onChange={(e) => setUserYomikata(e.target.value)}
        />
      </div>
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
        <BackButton onClick={handleGoBackToMemorize}>
          돌아가기
        </BackButton>
      </SingleButtonRow>

      <p>{currentIndex + 1} / {wordList.length} 문제</p>
    </Container>
  );
}
