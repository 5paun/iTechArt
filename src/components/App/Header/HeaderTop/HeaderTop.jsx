import React from 'react';
import './HeaderTop.scss';
import HeaderTopSoc from './HeaderTopSoc/HeaderTopSoc';
import HeaderTopContact from './HeaderTopContact/HeaderTopContact';

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
