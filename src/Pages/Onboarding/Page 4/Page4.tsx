import React, { useState } from 'react';
import { InputText } from 'Components';
import { Container } from './Page4.style';
import { MenuDiv } from '../Page 1/Page1.style';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

const country_data = [
  {
    code: '+44',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/225px-Flag_of_the_United_Kingdom_%282-3%29.svg.png',
    name: 'United Kingdom',
  },
  {
    code: '+91',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    name: 'India',
  },
  {
    code: '+1',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    name: 'USA',
  },
];

const selectStyle = {
  backgroundColor: '#f0efff',
  padding: '.2rem .3rem',
  borderRadius: 5,
};

const Page4 = () => {
  const [countryCode, setCountryCode] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCountryCode(event.target.value);
  };

  return (
    <Container>
      <div className={'head'}>
        <h1>Almost Finished</h1>
        <p>
          You have selected <b>Plan 3, you will be billed $79.99/month</b>
        </p>
        <span>A monthly/yearly invoice will sent to you:</span>
      </div>
      <form>
        <InputText
          placeholder={'Billing Contact'}
          startIcon={<i className={'bx bx-user'}></i>}
        />
        <div className={'check-box'}>
          <input type={'checkbox'} />
          <p>Same as personal information</p>
          <span>OR</span>
        </div>
        <InputText placeholder={'Billing Email Address'} />
        <div className={'contact-number'}>
          <Select
            variant={'standard'}
            displayEmpty
            name={'country'}
            value={countryCode}
            onChange={handleChange}
            style={selectStyle}
            renderValue={
              countryCode !== ''
                ? undefined
                : () => <MenuDiv>Country Code</MenuDiv>
            }
          >
            {country_data.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                <MenuDiv>
                  <img src={item.flag} alt={item.name} style={{ width: 17 }} />
                  <p>{item.name}</p>
                </MenuDiv>
              </MenuItem>
            ))}
          </Select>
          <InputText
            startIcon={<i className="bx bx-phone"></i>}
            placeholder={'Phone number'}
          />
        </div>{' '}
        <div className="phone-number"></div>
      </form>
    </Container>
  );
};

export default Page4;
