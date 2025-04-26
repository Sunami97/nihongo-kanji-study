import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Section = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li<{ isCorrect: boolean }>`
  margin: 1rem 0;
  padding-bottom: 1rem;
  color: ${(props) => (props.isCorrect ? '#4caf50' : '#f44336')};
  border-bottom: 1px solid #ddd; /* 🔥 구분선 추가 */
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
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

interface AnswerRecord {
  kanji: string;
  yomikata: string;
  correctMeaning: string;
  userMeaning: string;
  userYomikata: string;
  isCorrect: boolean;
}

export default function ResultPage() {
  const { chapter, year } = useParams<{ chapter: string; year: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { answers } = location.state as { answers: AnswerRecord[] };

  const correctAnswers = answers.filter((answer) => answer.isCorrect);
  const wrongAnswers = answers.filter((answer) => !answer.isCorrect);

  const handleRetry = () => {
    if (chapter && year) {
      navigate(`/test/${chapter}/${year}`);
    }
  };

  const handleGoYearSelect = () => {
    navigate(`/year-select/${chapter}`);
  };

  return (
    <Container>
      <h1>{chapter} {year} 테스트 결과과</h1>

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
              {answer.kanji}<br />
              정답 - {answer.correctMeaning} / {answer.yomikata}<br />
              내 답 - {answer.userMeaning} / {answer.userYomikata}<br />
            </Item>
          ))}
        </List>
      </Section>

      <ButtonWrapper>
        <Button onClick={handleRetry}>다시 풀기</Button>
        <Button onClick={handleGoYearSelect}>홈으로 가기</Button>
      </ButtonWrapper>
    </Container>
  );
}
