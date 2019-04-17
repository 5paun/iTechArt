import React from 'react';
import './footer-menu2.scss';
import FooterMenuItem from '../footer-menu/footer-menu-item/footer-menu-item';

const FooterMenu2 = () => (
  <div className="col-md-3 footer-menu">
    <h3 className="footer-menu__title">Новости компании</h3>
    <ul className="footer-nav">
      <li>
        <FooterMenuItem text="Новости" />
      </li>
      <li>
        <FooterMenuItem text="Вакансии" />
      </li>
      <li>
        <FooterMenuItem text="Контакты" />
      </li>
      <li>
        <FooterMenuItem text="Карта сайта" />
      </li>
    </ul>
  </div>
);

export default FooterMenu2;
