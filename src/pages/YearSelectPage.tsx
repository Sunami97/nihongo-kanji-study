import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const YearButton = styled.button`
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

const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'];

export default function YearSelectPage() {
  const { chapter } = useParams<{ chapter: string }>();
  const navigate = useNavigate();

  const handleGoBackToCategory = () => {
    navigate('/');
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton onClick={handleGoBackToCategory}>
          돌아가기
        </BackButton>
      </BackButtonWrapper>

      <h1>{chapter} 연도 선택</h1>

      {years.map((year) => (
        <YearButton
          key={year}
          onClick={() => navigate(`/memorize/${chapter}/${year}`)}
        >
          {year}
        </YearButton>
      ))}
    </Container>
  );
}
