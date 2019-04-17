import React from 'react';
import './form-authoriz.scss';
import AuthorizFields from './authoriz-fields/authoriz-fields';
import AuthorizButton from './authoriz-button/authoriz-button';

const FormAuthoriz = () => (
  <form className="form-authoriz">
    <AuthorizFields />
    <AuthorizButton />
  </form>
);

export default FormAuthoriz;
