import React from 'react';
import './header-bottom-menu-item.scss';
import { NavLink } from 'react-router-dom';

const HeaderBottomMenuItem = props => (
  <NavLink className="header-bottom-menu__item" to={props.path}>
    {props.text}
  </NavLink>
);

export default HeaderBottomMenuItem;
