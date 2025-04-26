import { useState, useEffect } from 'react';
import { KanjiWord } from '@/data/kanjiData';
import styled from 'styled-components';

interface KanjiCardProps {
  word: KanjiWord;
  defaultOpen?: boolean;
}

const Card = styled.div<{ isOpen: boolean }>`
  width: 200px;
  background-color: ${(props) => (props.isOpen ? '#e8f5e9' : 'white')};
  border: 2px solid ${(props) => (props.isOpen ? '#388e3c' : '#4caf50')};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
  box-shadow: ${(props) => (props.isOpen ? '0 8px 20px rgba(0, 0, 0, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.1)')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: #f1f8e9;
    transform: translateY(-3px);
  }
`;

const KanjiText = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #333;
`;

const DetailWrapper = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  width: 100%;
  margin-top: ${(props) => (props.isOpen ? '1rem' : '0')};
`;


const Detail = styled.div`
  font-size: 1rem;
  color: #555;
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
          <div><strong>요미카타:</strong> {word.yomikata}</div>
          <div><strong>뜻:</strong> {word.meaning}</div>
        </Detail>
      </DetailWrapper>
    </Card>
  );
}
