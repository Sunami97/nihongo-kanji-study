/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import {convertChapterName} from '@/utils/convertChapterName'

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
  margin: 2.5rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const Item = styled.li<{ isCorrect: boolean }>`
  width: 90%;
  max-width: 600px;
  padding: 1rem 1.5rem;
  border-left: 6px solid ${({ theme, isCorrect }) =>
    isCorrect ? theme.success : theme.error};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.resultCardBg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  word-break: keep-all;
  transition: all 0.3s;
`;

const AnswerBlock = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

const Label = styled.span`
  font-weight: bold;
  display: inline-block;
  min-width: 4rem;
  color: ${({ theme }) => theme.cardDetailText};
`;

const ButtonWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
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
      <h1>{convertChapterName(chapter as string)} {subcategory} 테스트 결과</h1>

      <Section>
        <Title>맞은 문제 ({correctAnswers.length})</Title>
        <List>
          {correctAnswers.map((answer, idx) => (
            <Item key={idx} isCorrect={true}>
              <AnswerBlock>
                <Label>한자</Label> {answer.kanji} ({answer.yomikata})<br />
                <Label>뜻</Label> {answer.correctMeaning}
              </AnswerBlock>
            </Item>
          ))}
        </List>
      </Section>

      <Section>
        <Title>틀린 문제 ({wrongAnswers.length})</Title>
        <List>
          {wrongAnswers.map((answer, idx) => (
            <Item key={idx} isCorrect={false}>
              <AnswerBlock>
                <Label>한자</Label> {answer.kanji} ({answer.yomikata})<br />
                <Label>정답</Label> {answer.correctMeaning}<br />
                <Label>내 답</Label> {answer.userMeaning || '미입력'}
              </AnswerBlock>
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
