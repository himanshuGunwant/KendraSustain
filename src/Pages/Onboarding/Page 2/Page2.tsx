import { MenuItem, Select, SelectChangeEvent, Button } from '@mui/material';
import axios from 'axios';
import { InputText } from 'Components';
import React, { useContext, useState } from 'react';
import { MenuDiv } from '../Page 1/Page1.style';
import { Container } from './Page2.style';
import { ONBOARDCONTEXT } from '../Onboarding';
import { OrgFormFields } from 'Types';
const country_data = [
  {
    name: undefined,
    code: undefined,
    flag: undefined
  },
  {
    code: '+44',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/225px-Flag_of_the_United_Kingdom_%282-3%29.svg.png',
    name: 'United Kingdom'
  },
  {
    code: '+91',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    name: 'India'
  },
  {
    code: '+1',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    name: 'USA'
  }
];

const selectStyle = {
  backgroundColor: '#f0efff',
  padding: '.2rem .3rem',
  borderRadius: 5
};

const admin =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxM1ZqdDdRMXN2dmtPY3BrN2JYZm9NcEFWbUt6VW5ORWJJLUVVME45M2ZnIn0.eyJleHAiOjE2NTk3MDA5NTIsImlhdCI6MTY1OTYxNDU1MiwianRpIjoiNTlmYjkwNjItZTU0Ni00OWNlLWEyZjQtMWFkYmNmMDYxMzBmIiwiaXNzIjoiaHR0cDovLzMuMTIxLjIzMy4zMjo4MDgwL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiIzNzZhZTc4Ny0zNDQwLTRhM2QtYjI5MS1hMTI5MjFjMzI4MTYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiY2JjMDBjZmMtZjM0ZS00NmFhLTljNDgtZThmYjQxYTE1M2ViIiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImNiYzAwY2ZjLWYzNGUtNDZhYS05YzQ4LWU4ZmI0MWExNTNlYiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4ifQ.O6g9BFmbPD0a4zGePpJqXXaaeb_gw2jD6PVnY7Gy1TUftl01kU6xF2Y_3JxaH7cFOrAo4ZubkRtsf8JApzNW6MO4Mdpiv2UlKg3QP5TqxaoW_sAwEojxF0vzqkDWVbZ4ckD-uO6RfmLij3TYFzQVh4_4dAaRmOMcbqFGBNFqbSZg009uSRGd47il_9hYS1Xn9rVqPOarPPd_AfCedPsKHOcjoPDRreyqNwqt_LKS6E3QgjWc_i6RZvgAL-Y8j7bSblvs9zG9hCXXrqC24T8omDmLToq0b2Bjk3deLKixoRVjdPu6c3WzKHyIKVvlEW25Yc5y4gTve2EhfrumWbbHjg';

const intialValue: OrgFormFields = {
  org_name: '',
  industry: '',
  address: '',
  country: '',
  state: '',
  zip_code: '',
  city: '',
  lei_id: '',
  org_email: ''
};
const Page2 = () => {
  const { makeRequest, createRealm } = useContext(ONBOARDCONTEXT);
  const [orgnaizationDetails, setOrgnaizationDetails] = useState<OrgFormFields>(intialValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setOrgnaizationDetails((details) => ({
      ...details,
      [event.target.name]: event.target.value
    }));
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setOrgnaizationDetails((details) => ({
      ...details,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createRealm?.(orgnaizationDetails);
  };

  return (
    <Container>
      <h1>Hello, USER</h1>
      <p>
        Let's get you started on your journey to <b>NET ZERO</b>
      </p>
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder={'Organization Name'}
          startIcon={<i className="bx bx-buildings"></i>}
          name={'org_name'}
          value={orgnaizationDetails.org_name}
          onChange={handleChange}
        />
        <InputText
          placeholder={'Industry'}
          startIcon={<i className="bx bxs-factory"></i>}
          name={'industry'}
          value={orgnaizationDetails.industry}
          onChange={handleChange}
        />
        <InputText
          placeholder={'Address'}
          startIcon={<i className="bx bxs-map"></i>}
          name={'address'}
          value={orgnaizationDetails.address}
          onChange={handleChange}
        />
        <Select
          variant={'standard'}
          displayEmpty
          name={'country'}
          value={orgnaizationDetails.country}
          onChange={handleSelectChange}
          style={selectStyle}
          renderValue={
            orgnaizationDetails.country !== '' ? undefined : () => <MenuDiv>Country</MenuDiv>
          }>
          {country_data.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              <MenuDiv>
                <img src={item.flag} alt={item.name} style={{ width: 17 }} />
                <p>{item.name}</p>
              </MenuDiv>
            </MenuItem>
          ))}
        </Select>
        <Select
          name={'state'}
          value={orgnaizationDetails.state}
          displayEmpty
          onChange={handleSelectChange}
          style={selectStyle}
          variant={'standard'}
          renderValue={
            orgnaizationDetails.state !== '' ? undefined : () => <MenuDiv>State</MenuDiv>
          }>
          {country_data.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              <MenuDiv>
                <img src={item.flag} alt={item.name} style={{ width: 17 }} />
                <p>{item.name}</p>
              </MenuDiv>
            </MenuItem>
          ))}
        </Select>
        <div className={'zip-code'}>
          <InputText
            startIcon={<i className={'bx bx-credit-card-front'}></i>}
            placeholder={'ZIP Code'}
            name={'zip_code'}
            value={orgnaizationDetails.zip_code}
            onChange={handleChange}
          />

          <Select
            name={'city'}
            variant={'standard'}
            value={orgnaizationDetails.city}
            onChange={handleSelectChange}
            style={selectStyle}
            displayEmpty
            renderValue={
              orgnaizationDetails.city !== '' ? undefined : () => <MenuDiv>City</MenuDiv>
            }>
            {country_data.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                <MenuDiv>
                  <img src={item.flag} alt={item.name} style={{ width: 17 }} />
                  <p>{item.name}</p>
                </MenuDiv>
              </MenuItem>
            ))}
          </Select>
        </div>
        <InputText
          startIcon={<i className={'bx bx-key'}></i>}
          placeholder={'LEI ID'}
          name={'lei_id'}
          value={orgnaizationDetails.lei_id}
          onChange={handleChange}
        />
        <InputText
          startIcon={<i className={'bx bx-envelope'}></i>}
          placeholder={'Contact Email'}
          name={'org_email'}
          value={orgnaizationDetails.org_email}
          onChange={handleChange}
        />
      </form>
    </Container>
  );
};

export default Page2;
