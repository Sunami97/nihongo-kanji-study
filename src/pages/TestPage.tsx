import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { kanjiData, KanjiWord } from '@/data/kanjiData';
import styled from 'styled-components';
import { AnswerRecord } from '@/types/kanji.types';
import { shuffleArray } from '@/utils/shuffleArray';

const Container = styled.div`
 min-width: 300px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KanjiText = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;
const YomikataBox = styled.div`
  width: 300px;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YomikataButtonBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const YomikataText = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #555;
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

const OutlineButton = styled.button`
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  background-color: transparent;
  border: 2px solid #4caf50;
  color: #4caf50;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
`;

export default function TestPage() {
  const { chapter, subcategory } = useParams<{ chapter: string; subcategory: string }>();
  const [showYomikata, setShowYomikata] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!chapter) {
      navigate('/');
    } else if (!subcategory) {
      navigate(`/sub-category/${chapter}`);
    }
  }, [chapter, subcategory, navigate]);

  //처음 한 번만 랜덤 섞기
  const [shuffledWordList] = useState<KanjiWord[]>(() => {
    if (chapter && subcategory && kanjiData[chapter]?.[subcategory]) {
      return shuffleArray(kanjiData[chapter][subcategory]);
    }
    return [];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userMeaning, setUserMeaning] = useState('');
  const [userYomikata, setUserYomikata] = useState('');
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const meaningInputRef = useRef<HTMLInputElement>(null);

  const focusMeaningInput = () => {
    meaningInputRef.current?.focus();
  };

  const currentWord = shuffledWordList[currentIndex];

  const handleCheckAnswer = () => {
    if (!currentWord) return;

    const clean = (text: string) =>
      text.replace(/\s/g, ''); // 공백 제거

    const removeParentheses = (text: string): string =>
      text.replace(/\([^)]*\)/g, ''); // 괄호와 그 안 내용 제거

    const correctMeanings = removeParentheses(currentWord.meaning) // 괄호 제거
      .split(',')
      .map(item => clean(item)); // 공백 제거

    const meaningCorrect = correctMeanings.includes(clean(userMeaning));
    // const yomikataCorrect = clean(userYomikata) === clean(currentWord.yomikata);
    // const isCorrect = meaningCorrect && yomikataCorrect;

    const newRecord: AnswerRecord = {
      kanji: currentWord.kanji,
      yomikata: currentWord.yomikata,
      correctMeaning: currentWord.meaning,
      userMeaning: userMeaning.trim(),
      userYomikata: userYomikata.trim(),
      isCorrect: meaningCorrect,
    };

    const newAnswers = [...answers, newRecord];

    if (currentIndex + 1 < shuffledWordList.length) {
      setAnswers(newAnswers);
      setCurrentIndex((prev) => prev + 1);
      setUserMeaning('');
      setUserYomikata('');
      setShowYomikata(false);
      setTimeout(focusMeaningInput, 0);
    } else {
      navigate(`/result/${chapter}/${subcategory}`, {
        state: { answers: newAnswers },
      });
    }
  };


  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setUserMeaning('');
      setUserYomikata('');
      setShowYomikata(false);
      setTimeout(focusMeaningInput, 0);
    }
  };

  const handleGoBackToMemorize = () => {
    if (chapter && subcategory) {
      navigate(`/memorize/${chapter}/${subcategory}`);
    }
  };

  if (!shuffledWordList.length) {
    return <Container>문제가 없습니다.</Container>;
  }

  return (
    <Container>
      <h1>{chapter} {subcategory} 테스트</h1>
      <KanjiText>{currentWord.kanji}</KanjiText>
      <YomikataBox>
        <YomikataText>
          {showYomikata && currentWord.yomikata}
        </YomikataText>
      </YomikataBox>
      <YomikataButtonBox>
        <OutlineButton onClick={() => setShowYomikata(prev => !prev)}>
          발음
        </OutlineButton>
      </YomikataButtonBox>
      {/* <div>
        <Input
          type="text"
          value={userYomikata}
          placeholder="요미카타 입력"
          onChange={(e) => setUserYomikata(e.target.value)}
        />
      </div> */}
      <div>
        <Input
          type="text"
          value={userMeaning}
          placeholder="뜻 입력"
          ref={meaningInputRef}
          onChange={(e) => setUserMeaning(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCheckAnswer();
            }
          }}
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

      <p>{currentIndex + 1} / {shuffledWordList.length} 문제</p>
    </Container>
  );
}
