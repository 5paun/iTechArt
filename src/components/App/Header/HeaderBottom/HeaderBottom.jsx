import React from 'react';
import './HeaderBottom.scss';
import HeaderBottomNav from './HeaderBottomNav/HeaderBottomNav';
import HeaderBottomForm from './HeaderBottomForm/HeaderBottomForm';

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
