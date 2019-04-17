import React from 'react';
import './Header.scss';
import HeaderTop from './header-top/header-top';
import HeaderBottom from './header-bottom/header-bottom';

const Header = () => (
  <header className="header">
    <HeaderTop />
    <HeaderBottom />
  </header>
);

export default Header;
