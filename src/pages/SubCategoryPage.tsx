/** @jsxImportSource @emotion/react */
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { kanjiData, KanjiWord } from '@/data/kanjiData';

interface SubCategory {
  name: string;
  words: KanjiWord[];
}

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme.backgroundImage2};
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SubCategoryButton = styled.button`
  background-color: ${({ theme }) => theme.alt};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.altHover};
  }
`;

const BackButtonWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: start;
`;

const BackButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.secondary};        // ✅ 보조색
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryHover}; // ✅ hover도 보조색
  }
`;

export default function SubCategoryPage() {
  const { chapter } = useParams<{ chapter: string }>();
  const navigate = useNavigate();

  const subCategoryList: SubCategory[] = chapter && kanjiData[chapter]
    ? Object.entries(kanjiData[chapter]).map(([name, words]) => ({ name, words }))
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
        <BackButton onClick={handleGoBackToCategory}>돌아가기</BackButton>
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
