import React from 'react';
import './footer-menu.scss';
import FooterMenuItem from './footer-menu-item/footer-menu-item';

const FooterMenu = () => (
  <div className="col-md-3 offset-md-1 footer-menu">
    <h3 className="footer-menu__title">Информация для клиентов</h3>
    <ul className="footer-nav">
      <li>
        <FooterMenuItem text="Главная страница" link="/main" />
      </li>
      <li>
        <FooterMenuItem text="Блог" link="/blog" />
      </li>
      <li>
        <FooterMenuItem text="О компании" link="/company" />
      </li>
      <li>
        <FooterMenuItem text="Новости" link="/news" />
      </li>
      <li>
        <FooterMenuItem text="Бренд" link="/brand" />
      </li>
      <li>
        <FooterMenuItem text="Форум" link="/forum" />
      </li>
    </ul>
  </div>
);

export default FooterMenu;
