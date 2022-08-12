import React from 'react';
import { Circle, Container, Image, Links } from './Footer.style';

interface Proptypes {
  style?: React.CSSProperties;
}
const Footer: React.FC<Proptypes> = ({ style }) => {
  return (
    <Container style={style}>
      <p>
        @ 2019-2022 Kendra Laboratories Limited. All rights reserved. Private
        and Confidential
      </p>
      <Links>
        <li>FQA</li>
        <li>
          <Circle />
        </li>
        <li>TERMS & CONDITIONS</li>
        <li>
          <Circle />
        </li>
        <li>PRIVACY STATEMENT</li>
      </Links>
      <Image>
        <p>Powered By</p>
        <img src={'/assets/svg/kendra-labs.svg'} alt="Kendra Sustain" />
      </Image>
    </Container>
  );
};

export default Footer;
