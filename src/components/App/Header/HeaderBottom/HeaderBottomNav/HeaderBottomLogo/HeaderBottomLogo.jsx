import React from 'react';
import './HeaderBottomLogo.scss';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const HeaderBottomLogo = () => (
  <div className="header-bottom-logo">
    <NavLink to="/main">
      <img src={logo} alt="logo" />
    </NavLink>
  </div>
);

export default HeaderBottomLogo;
