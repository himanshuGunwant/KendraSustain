import React from 'react';
import { Container } from './BlockQuote.style';
interface PropType {
  content: React.ReactNode;
  writer: React.ReactNode;
}
const BlockQuote: React.FC<PropType> = ({ content, writer }) => {
  return (
    <Container>
      <blockquote>{content}</blockquote>
      <cite>- {writer}</cite>
    </Container>
  );
};

export default BlockQuote;
