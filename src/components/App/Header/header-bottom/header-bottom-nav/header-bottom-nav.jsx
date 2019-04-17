import React from 'react';
import './header-bottom-nav.scss';
import HeaderBottomLogo from './header-bottom-logo/header-bottom-logo';
import HeaderBottomMenu from './header-bottom-menu/header-bottom-menu';

const HeaderBottomNav = () => (
  <div className="col-md-8 header-bottom">
    <HeaderBottomLogo />
    <HeaderBottomMenu />
  </div>
);

export default HeaderBottomNav;
