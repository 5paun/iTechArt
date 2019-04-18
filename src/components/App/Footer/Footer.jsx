import React from 'react';
import './footer.scss';
import FooterMenu from './footer-menu/footer-menu';
import FooterLeft from './footer-left/footer-left';
import FooterMenu2 from './footer-menu2/footer-menu2';

const Footer = () => (
  <footer className="footer">
    <div className="container wrapper">
      <div className="row">
        <FooterLeft />
        <FooterMenu />
        <FooterMenu2 />
      </div>
    </div>
  </footer>
);

export default Footer;
