import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import { Navbar, Footer, NextButton } from 'Components';
import qs from 'qs';
import { Container } from './Onboarding.style';
import Page1 from './Page 1/Page1';
import Page2 from './Page 2/Page2';
import Page3 from './Page 3/Page3';
import Page4 from './Page 4/Page4';
import Page5 from './Page 5/Page5';
import Steps from './Steps/Steps';

interface ICONTEXT {
  makeRequest?: AxiosInstance;
}
export const ONBOARDCONTEXT = createContext<ICONTEXT>({});

const Onboarding = () => {
  const [page, setPage] = useState(1);
  const [keycloakToken, setKeycloakToken] = useState<string>();
  const KEYCLOAK_USER = process.env.REACT_APP_KEYCLOAK_USERNAME;
  const KEYCLOAK_PASSWORD = process.env.REACT_APP_KEYCLOAK_PASSWORD;
  const KEYCLOAK_SERVER = process.env.REACT_APP_KEYCLOAK_SERVER;

  const makeRequest = axios.create({
    baseURL: KEYCLOAK_SERVER,
    headers: {
      Authorization: 'bearer ' + keycloakToken
    }
  });

  const handleNext = () => {
    setPage((page) => {
      page++;
      return page > 5 ? 1 : page;
    });
  };
  const handleBack = () => {
    setPage((page) => {
      page--;
      return page < 1 ? 5 : page;
    });
  };
  const handleClick = (clickItem: number) => {
    setPage(clickItem);
  };

  const createRealm = () => {
    makeRequest({
      url: '/admin/realms',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        realm: 'Api 2'
      }
    }).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    makeRequest({
      url: '/realms/master/protocol/openid-connect/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        username: KEYCLOAK_USER,
        password: KEYCLOAK_PASSWORD,
        client_id: 'admin-cli',
        grant_type: 'password'
      })
    }).then((res) => {
      setKeycloakToken(res.data.access_token);
    });
  }, []);

  return (
    <ONBOARDCONTEXT.Provider value={{ makeRequest }}>
      <Container page={page}>
        <Navbar style={{ paddingTop: '1rem' }} />
        <main>
          <div>
            {page === 1 && <Page1 />}
            {page === 2 && <Page2 />}
            {page === 3 && <Page3 />}
            {page === 4 && <Page4 />}
            {page === 5 && <Page5 />}
            <NextButton
              onNext={handleNext}
              onBack={handleBack}
              isCompleted={page === 5}
              isFirst={page === 1}
            />
          </div>
          <Steps current={page} onClick={handleClick} />
        </main>
        <Footer style={{ backgroundColor: 'transparent' }} />
      </Container>
    </ONBOARDCONTEXT.Provider>
  );
};

export default Onboarding;
