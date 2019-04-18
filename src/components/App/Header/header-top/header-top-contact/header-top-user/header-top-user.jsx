import React from 'react';
import './header-top-user.scss';
import UserEnter from './user-enter/user-enter';

const HeaderTopUser = () => (
  <div className="header-top-user">
    <UserEnter link="/authoriz" icon="fa fa-home" text="Войти" />
    <UserEnter link="/reg" icon="fa fa-user" text="Регистрация" />
  </div>
);

export default HeaderTopUser;
