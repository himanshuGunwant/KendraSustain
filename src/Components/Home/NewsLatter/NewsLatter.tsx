import React from 'react';
import { Container } from './NewsLatter.style';
// TODO : Write css better
const NewsLatter = () => {
  return (
    <Container className={'mainContainer'}>
      <div className={'imgWrapper'}>
        <img src="/images/NewsLatter.png" alt="NewsLatter-img" />
      </div>
      <div className={'textContainer'}>
        <div className={'textWrapper'}>
          <p className={'p1'}>Kendra Sustain</p>
          <p className={'p2'}>
            Transform your business and integrate data into everything you do.
          </p>
        </div>
        <div className={'inputContainer'}>
          <p className={'p3'}>Subscribe to our NewsLatter</p>
          <p className={'p4'}>Get lettest updates on Kendra Sustain</p>
          <form className={'inputWrapper'}>
            <input type="email" placeholder="Your Email" spellCheck={false} />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default NewsLatter;
