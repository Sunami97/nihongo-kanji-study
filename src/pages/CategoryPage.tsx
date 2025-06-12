/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { kanjiData } from '@/data/kanjiData';
import { PiBookOpenTextBold } from 'react-icons/pi';
import {convertChapterName} from '@/utils/convertChapterName'

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme.backgroundImage1};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Icon = styled(PiBookOpenTextBold)`
  font-size: 4rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 1.5rem;
// `;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem; 
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;


const ChapterButton = styled.button`
  margin: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;     

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }
`;

export default function CategoryPage() {
  const navigate = useNavigate();
  const chapterKeys = Object.keys(kanjiData);
  const handleSelectChapter = (chapterId: string) => {
    navigate(`/sub-category/${chapterId}`);
  };

  return (
    <Container>
      <Icon />
      <Title>일본어 한자 암기</Title>
      <SubTitle>一緒に頑張りましょう！</SubTitle>

      <ButtonWrapper>
        {chapterKeys.map((id) => (
          <ChapterButton key={id} onClick={() => handleSelectChapter(id)}>
            {convertChapterName(id)}
          </ChapterButton>
        ))}
      </ButtonWrapper>
    </Container>
  );
}
