import React from 'react';
import './header-bottom-menu.scss';
import HeaderBottomMenuItem from './header-bottom-menu-item/header-bottom-menu-item';

const HeaderBottomMenu = () => (
  <nav className="header-bottom-menu visible-lg">
    <HeaderBottomMenuItem text="главная страница" />
    <HeaderBottomMenuItem text="о компании" />
    <HeaderBottomMenuItem text="бренд" />
    <HeaderBottomMenuItem text="блок" />
    <HeaderBottomMenuItem text="новости" />
    <HeaderBottomMenuItem text="форум" />
  </nav>
);

export default HeaderBottomMenu;
