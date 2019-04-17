import React from 'react';
import './header-bottom.scss';
import HeaderBottomNav from './header-bottom-nav/header-bottom-nav';
import HeaderBottomForm from './header-bottom-form/header-bottom-form';

const HeaderBottom = () => (
  <div className="header-bottom">
    <div className="container wrapper">
      <div className="row">
        <HeaderBottomNav />
        <HeaderBottomForm />
      </div>
    </div>
  </div>
);

export default HeaderBottom;
