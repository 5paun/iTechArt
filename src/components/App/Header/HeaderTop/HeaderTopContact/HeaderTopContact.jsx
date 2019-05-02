import React from 'react';
import './HeaderTopContact.scss';
import HeaderTopPhone from './HeaderTopPhone/HeaderTopPhone';
import HeaderTopUser from './HeaderTopUser/HeaderTopUser';

const HeaderTopContact = () => (
  <div className="col-md-4 offset-md-5 header-top-contact">
    <HeaderTopPhone />
    <HeaderTopUser />
  </div>
);

export default HeaderTopContact;
