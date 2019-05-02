import React from 'react';
import './Footer.scss';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterMenu2 from './FooterMenu2/FooterMenu2';

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
