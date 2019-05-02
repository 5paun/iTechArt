import React from 'react';
import './HeaderBottomMenu.scss';
import HeaderBottomMenuItem from './HeaderBottomMenuItem/HeaderBottomMenuItem';

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
