import React from 'react';
import './header-top.scss';
import HeaderTopSoc from './header-top-soc/header-top-soc';
import HeaderTopContact from './header-top-contact/header-top-contact';

const HeaderTop = () => (
  <div className="container header-top wrapper">
    <div className="row">
      <div className="col-md-3">
        <HeaderTopSoc />
      </div>
      <HeaderTopContact />
    </div>
  </div>
);

export default HeaderTop;
