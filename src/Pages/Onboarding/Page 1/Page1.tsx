import React, { useState } from 'react';
import { InputText } from 'Components';
import { Container, MenuDiv } from './Page1.style';
import { Select, MenuItem } from '@mui/material';
const country_data = [
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

const Page1 = () => {
  const [countryCode, setCountryCode] = useState('+91');

  return (
    <Container>
      <h1>Welcome!</h1>
      <p>
        Let's get you started on your journey to <b>NET ZERO</b>
      </p>
      <span>
        Tell us a little bit about <b>Yourself</b>
      </span>
      <form>
        <InputText startIcon={<i className="bx bx-user"></i>} placeholder={'First Name'} />
        <InputText startIcon={<i className="bx bx-user"></i>} placeholder={'Last Name'} />
        <InputText
          startIcon={<i className="bx bx-envelope"></i>}
          placeholder={'Company Email Address'}
        />
        <div className={'contact-number'}>
          <Select
            variant={'standard'}
            style={selectStyle}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value as string)}>
            {country_data.map((item, index) => (
              <MenuItem value={item.code} key={index}>
                <MenuDiv>
                  <img src={item.flag} alt="" /> {item.code}
                </MenuDiv>
              </MenuItem>
            ))}
          </Select>
          <InputText startIcon={<i className="bx bx-phone"></i>} placeholder={'Phone number'} />
        </div>
      </form>
    </Container>
  );
};

export default Page1;
