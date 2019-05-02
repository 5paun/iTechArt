import React from 'react';
import './HeaderTopUser.scss';
import UserEnter from './UserEnter/UserEnter';

const HeaderTopUser = () => (
  <div className="header-top-user">
    <UserEnter link="/authoriz" icon="fa fa-home" text="Войти" />
    <UserEnter link="/reg" icon="fa fa-user" text="Регистрация" />
  </div>
);

export default HeaderTopUser;
