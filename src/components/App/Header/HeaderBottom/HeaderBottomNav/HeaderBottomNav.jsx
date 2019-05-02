import React from 'react';
import './HeaderBottomNav.scss';
import HeaderBottomLogo from './HeaderBottomLogo/HeaderBottomLogo';
import HeaderBottomMenu from './HeaderBottomMenu/HeaderBottomMenu';

const HeaderBottomNav = () => (
  <div className="col-md-8 header-bottom">
    <HeaderBottomLogo />
    <HeaderBottomMenu />
  </div>
);

export default HeaderBottomNav;
