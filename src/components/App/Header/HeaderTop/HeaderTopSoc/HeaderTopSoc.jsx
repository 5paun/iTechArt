import React from 'react';
import './HeaderTopSoc.scss';
import HeaderTopSocLink from './HeaderTopSocLink/HeaderTopSocLink';

const HeaderTopSoc = props => (
  <ul className="header-top-soc">
    <HeaderTopSocLink icon="fa fa-vk" />
    <HeaderTopSocLink icon="fa fa-facebook" />
    <HeaderTopSocLink icon="fa fa-odnoklassniki" />
    <HeaderTopSocLink icon="fa fa-instagram" />
    <HeaderTopSocLink icon="fa fa-youtube-play" />
  </ul>
);

export default HeaderTopSoc;
