import React from 'react';
import './header-bottom-menu-item.scss';

const HeaderBottomMenuItem = props => (
  <a className="header-bottom-menu__item" href="#">
    {props.text}
  </a>
);

export default HeaderBottomMenuItem;
