/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

interface AnswerRecord {
  kanji: string;
  yomikata: string;
  correctMeaning: string;
  userMeaning: string;
  userYomikata: string;
  isCorrect: boolean;
}

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

const Section = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li<{ isCorrect: boolean }>`
  margin: 1rem 0;
  padding-bottom: 1rem;
  color: ${({ theme, isCorrect }) =>
    isCorrect ? theme.success : theme.error};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  text-align: center;
  word-break: keep-all;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.alt};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.altHover};
  }
`;

const BackButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryHover};
  }
`;

export default function ResultPage() {
  const { chapter, subcategory } = useParams<{ chapter: string; subcategory: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!chapter) {
      navigate('/');
    } else if (!subcategory) {
      navigate(`/sub-category/${chapter}`);
    }
  }, [chapter, subcategory, navigate]);

  const { answers } = location.state as { answers: AnswerRecord[] };

  const correctAnswers = answers.filter((answer) => answer.isCorrect);
  const wrongAnswers = answers.filter((answer) => !answer.isCorrect);

  const handleRetry = () => {
    if (chapter && subcategory) {
      navigate(`/test/${chapter}/${subcategory}`);
    }
  };

  const handleGoMemorize = () => {
    navigate(`/memorize/${chapter}/${subcategory}`);
  };

  return (
    <Container>
      <h1>{chapter} {subcategory} 테스트 결과</h1>

      <Section>
        <Title>맞은 문제 ({correctAnswers.length})</Title>
        <List>
          {correctAnswers.map((answer, idx) => (
            <Item key={idx} isCorrect={true}>
              {answer.kanji} ({answer.yomikata}) - {answer.correctMeaning}
            </Item>
          ))}
        </List>
      </Section>

      <Section>
        <Title>틀린 문제 ({wrongAnswers.length})</Title>
        <List>
          {wrongAnswers.map((answer, idx) => (
            <Item key={idx} isCorrect={false}>
              {answer.kanji} ({answer.yomikata})<br />
              정답 - {answer.correctMeaning}<br />
              내 답 - {answer.userMeaning}
            </Item>
          ))}
        </List>
      </Section>

      <ButtonWrapper>
        <Button onClick={handleRetry}>다시 풀기</Button>
        <BackButton onClick={handleGoMemorize}>돌아가기</BackButton>
      </ButtonWrapper>
    </Container>
  );
}
