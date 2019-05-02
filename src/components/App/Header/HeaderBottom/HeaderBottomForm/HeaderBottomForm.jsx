import React from 'react';
import './HeaderBottomForm.scss';
import HeaderForm from './HeaderForm/HeaderForm';
import HeaderFormBuy from './HeaderFormBuy/HeaderFormBuy';

const HeaderBottomForm = () => (
  <div className="col-md-4 header-bottom-form">
    <HeaderForm />
    <HeaderFormBuy price="15 000р" />
  </div>
);

export default HeaderBottomForm;
