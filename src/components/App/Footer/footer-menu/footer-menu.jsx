import React from 'react';
import './footer-menu.scss';
import FooterMenuItem from './footer-menu-item/footer-menu-item';

const FooterMenu = () => (
  <div className="col-md-3 offset-md-1 footer-menu">
    <h3 className="footer-menu__title">Информация для клиентов</h3>
    <ul className="footer-nav">
      <li>
        <FooterMenuItem text="Главная страница" />
      </li>
      <li>
        <FooterMenuItem text="Блог" />
      </li>
      <li>
        <FooterMenuItem text="О компании" />
      </li>
      <li>
        <FooterMenuItem text="Новости" />
      </li>
      <li>
        <FooterMenuItem text="Бренд" />
      </li>
      <li>
        <FooterMenuItem text="Форум" />
      </li>
    </ul>
  </div>
);

export default FooterMenu;
