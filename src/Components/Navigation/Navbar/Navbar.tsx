import React from 'react';
import { Link } from 'react-router-dom';
import navItems from './NavRoutes';
import { Container } from './Navbar.style';

interface PropsType {
  style?: React.CSSProperties;
}
const Navbar: React.FC<PropsType> = ({ style }) => {
  return (
    <Container style={style}>
      <div className={'brand'}>
        <img src={'/assets/images/kendra-white-full.png'} alt="Kendra" />
        <sup>Beta</sup>
      </div>
      <ul>
        {navItems.map((element, pos) => (
          <li key={pos}>
            <Link
              to={element.to}
              className={
                !element.icon
                  ? 'nav-text'
                  : !element.text
                  ? 'nav-icon'
                  : 'nav-item'
              }
            >
              <i className={element.icon}></i>
              {element.text}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navbar;
