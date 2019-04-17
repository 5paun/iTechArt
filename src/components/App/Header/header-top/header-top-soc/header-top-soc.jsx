import React from 'react';
import './header-top-soc.scss';
import HeaderTopSocLink from './header-top-soc-link/header-top-soc-link';

const HeaderTopSoc = () => (
  <ul className="header-top-soc">
    <HeaderTopSocLink />
    <HeaderTopSocLink />
    <HeaderTopSocLink />
    <HeaderTopSocLink />
    <HeaderTopSocLink />
  </ul>
);

export default HeaderTopSoc;
