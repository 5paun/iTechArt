import React from 'react';
import './header-bottom-logo.scss';
import { NavLink } from 'react-router-dom';

const HeaderBottomLogo = () => (
  <div className="header-bottom-logo">
    <NavLink to="/main">
      <img src="./logo.svg" alt="logo" />
    </NavLink>
  </div>
);

export default HeaderBottomLogo;
