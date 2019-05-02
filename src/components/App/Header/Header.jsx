import React from 'react';
import './Header.scss';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header = () => (
  <header className="header">
    <HeaderTop />
    <HeaderBottom />
  </header>
);

export default Header;
