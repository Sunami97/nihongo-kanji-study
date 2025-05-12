/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { KanjiWord } from '@/data/kanjiData';

interface KanjiCardProps {
  word: KanjiWord;
  defaultOpen?: boolean;
}

const Card = styled.div<{ isOpen: boolean }>`
  width: 220px;
  background-color: ${({ theme, isOpen }) => (isOpen ? theme.cardBg : theme.background)};
  border: 2px solid ${({ theme }) => theme.cardBorder };
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
  box-shadow: ${({ theme, isOpen }) =>
    isOpen ? `0 8px 20px ${theme.cardShadow}` : `0 2px 6px ${theme.cardShadow}`};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.cardHoverBg};
    border-color: ${({ theme }) => theme.cardBorderHover};
    transform: translateY(-3px);
  }
`;

const KanjiText = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.cardText};
`;

const DetailWrapper = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  width: 100%;
  margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
`;

const Detail = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.cardDetailText};
  font-weight: 500;
  word-break: keep-all;
`;

export default function KanjiCard({ word, defaultOpen = false }: KanjiCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Card isOpen={open} onClick={toggleOpen}>
      <KanjiText>{word.kanji}</KanjiText>
      <DetailWrapper isOpen={open}>
        <Detail>
          <div>{word.yomikata}</div>
          <div>{word.meaning}</div>
        </Detail>
      </DetailWrapper>
    </Card>
  );
}
