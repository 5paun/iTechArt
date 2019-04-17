import React from 'react';
import './header-top-contact.scss';
import HeaderTopPhone from './header-top-phone/header-top-phone';
import HeaderTopUser from './header-top-user/header-top-user';

const HeaderTopContact = () => (
  <div className="col-md-4 offset-md-5 header-top-contact">
    <HeaderTopPhone />
    <HeaderTopUser />
  </div>
);

export default HeaderTopContact;
