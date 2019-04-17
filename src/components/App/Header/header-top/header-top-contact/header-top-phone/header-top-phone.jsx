import React from 'react';
import './header-top-phone.scss';

const HeaderTopPhone = () => (
  <div className="header-top-phone">
    <i className="fa fa-phone" aria-hidden="true" />
    <a href="tel:+88000006900">
      <span>+8(800)</span>0006900
    </a>
  </div>
);

export default HeaderTopPhone;
