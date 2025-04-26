import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { kanjiData, KanjiWord } from '@/data/kanjiData';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
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

const SubCategoryButton = styled.button`
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
  margin-bottom: 2rem;
  display: flex;
  justify-content: start;
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

interface SubCategory {
  name: string;
  words: KanjiWord[];
}

export default function SubCategoryPage() {
  const { chapter } = useParams<{ chapter: string }>();
  const navigate = useNavigate();

  const subCategoryList: SubCategory[] = chapter && kanjiData[chapter]
  ? Object.entries(kanjiData[chapter]).map(([name, words]) => ({
      name,
      words,
    })).reverse()
  : [];
  const handleSelectSubCategory = (subcategory: string) => {
    navigate(`/memorize/${chapter}/${subcategory}`);
  };

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

      <Title>{chapter} 선택</Title>

      <ButtonWrapper>
        {subCategoryList.map((subcategory) => (
          <SubCategoryButton
            key={subcategory.name}
            onClick={() => handleSelectSubCategory(subcategory.name)}
          >
            {subcategory.name}
          </SubCategoryButton>
        ))}
      </ButtonWrapper>
    </Container>
  );
}
