import React from 'react';
import './header-top-user.scss';

const HeaderTopUser = () => (
  <div className="header-top-user">
    <a href="/pages/page-authoriz.html">
      <i className="fa fa-home" aria-hidden="true" />
      <span>Войти</span>
    </a>
    <a href="/pages/page-reg.html">
      <i className="fa fa-user" aria-hidden="true" />
      <span>Регистрация</span>
    </a>
  </div>
);

export default HeaderTopUser;
