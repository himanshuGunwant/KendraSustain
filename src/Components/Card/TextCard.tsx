import React from 'react';
import { Container } from './TextCard.style';
interface PropsType {
  cards: {
    title: string;
    data: string | number;
  }[];
  grid?: number;
}
const TextCard: React.FC<PropsType> = ({ cards = [], grid = 3 }) => {
  return (
    <Container
      style={{
        gridTemplateColumns: `repeat(${grid}, 1fr)`,
      }}
    >
      {cards.map((item, pos) => (
        <div className={'card'} key={pos}>
          <span>{item.title}</span>
          <p> {item.data} </p>
        </div>
      ))}
    </Container>
  );
};
export default TextCard;
