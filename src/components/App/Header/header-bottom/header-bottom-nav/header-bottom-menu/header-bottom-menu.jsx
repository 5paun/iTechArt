import React from 'react';
import './header-bottom-menu.scss';
import HeaderBottomMenuItem from './header-bottom-menu-item/header-bottom-menu-item';

const HeaderBottomMenu = () => (
  <nav className="header-bottom-menu visible-lg">
    <HeaderBottomMenuItem text="главная страница" path="/main" />
    <HeaderBottomMenuItem text="о компании" path="/company" />
    <HeaderBottomMenuItem text="бренд" path="/brand" />
    <HeaderBottomMenuItem text="блок" path="/block" />
    <HeaderBottomMenuItem text="новости" path="/news" />
    <HeaderBottomMenuItem text="форум" path="/forum" />
  </nav>
);

export default HeaderBottomMenu;
