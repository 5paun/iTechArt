import React from 'react';
import './footer-menu2.scss';
import FooterMenuItem from '../footer-menu/footer-menu-item/footer-menu-item';

const FooterMenu2 = () => (
  <div className="col-md-3 footer-menu">
    <h3 className="footer-menu__title">Новости компании</h3>
    <ul className="footer-nav">
      <li>
        <FooterMenuItem text="Новости" link="/news" />
      </li>
      <li>
        <FooterMenuItem text="Вакансии" link="/vacancies" />
      </li>
      <li>
        <FooterMenuItem text="Контакты" link="/contacts" />
      </li>
      <li>
        <FooterMenuItem text="Карта сайта" link="/map" />
      </li>
    </ul>
  </div>
);

export default FooterMenu2;
