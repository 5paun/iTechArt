import React from 'react';
import './header-bottom-form.scss';
import HeaderForm from './header-form/header-form';
import HeaderFormBuy from './header-form-buy/header-form-buy';

const HeaderBottomForm = () => (
  <div className="col-md-4 header-bottom-form">
    <HeaderForm />
    <HeaderFormBuy price="15 000р" />
  </div>
);

export default HeaderBottomForm;
