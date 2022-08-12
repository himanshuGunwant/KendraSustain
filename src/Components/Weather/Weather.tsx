import React from 'react';
import { Container } from './Weather.style';
export default function Weather() {
  return (
    <Container>
      <img src="https://pngimg.com/uploads/sun/sun_PNG13450.png" alt="Sun" />
      <strong>27°C</strong>
      <p>
        It's a <strong>Sunny day </strong>
        Today
      </p>
    </Container>
  );
}
