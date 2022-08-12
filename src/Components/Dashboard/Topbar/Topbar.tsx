import React from 'react';
import { userType } from 'Types';
import calendar from './calendar.svg';
import { Container } from './Topbar.style';

interface Proptypes {
  user?: userType;
  headtext?: React.ReactNode;
}
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();
const Topbar: React.FC<Proptypes> = ({ headtext }) => {
  return (
    <Container>
      <div className={'right'}>{headtext}</div>
      <div className={'left'}>
        <div className={'date'}>
          <img src={calendar} alt="" />
          <p>
            {weekday[date.getDay()].slice(0, 3)} , {date.getDate()}{' '}
            {month[date.getMonth()].slice(0, 3)} {date.getFullYear()}
          </p>
          <i className="bx bx-chevron-down"></i>
        </div>
        <i className="bx bx-search"></i>
        <i className="bx bxs-bell"></i>
        <img src={'/assets/default.png'} alt="" className={'photo'} />
      </div>
    </Container>
  );
};
export default Topbar;
