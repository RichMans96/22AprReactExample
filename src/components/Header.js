import React from 'react';
import './HeaderStyles.css';

const Header = ({ home, about, contact, homeSetter }) => {
  return (
    <nav>
      <a href='/' onClick={homeSetter}>
        {home}
      </a>
      <a href='/'>{about}</a>
      <a href='/'>{contact}</a>
    </nav>
  );
};

export default Header;
