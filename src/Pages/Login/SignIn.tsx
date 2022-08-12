import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { Container, Left, Logo, Right } from './Sign.style';
import { Footer } from 'Components';
export default function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem('authToken')) navigate('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Left>
        <Logo>
          <h1>Welcome to</h1>
          <img src={'/assets/images/kendra-white-full.png'} alt="Logo" />
          <p>
            Enabling Organizations to Embed Data driven <br /> Sustainability Decision-Making across{' '}
            <br /> business operations.
          </p>
        </Logo>
        <img src={'/assets/svg/signin/login-person.svg'} alt="Logo" />
      </Left>
      <Right>{location.pathname === '/login' ? <Login /> : <Signup />}</Right>
      {/* <Footer /> */}
    </Container>
  );
}
