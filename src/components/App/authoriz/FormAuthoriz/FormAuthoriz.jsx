import React from 'react';
import './FormAuthoriz.scss';
import AuthorizFields from './AuthorizFields/AuthorizFields';
import AuthorizButton from './AuthorizButton/AuthorizButton';

const FormAuthoriz = () => (
  <form className="form-authoriz">
    <AuthorizFields />
    <AuthorizButton />
  </form>
);

export default FormAuthoriz;
