import React from 'react';
import './FormAuthoriz.scss';
import AuthorizFields from './AuthorizFields/AuthorizFields';
import AuthorizButton from './AuthorizButton/AuthorizButton';

const FormAuthoriz = () => (
  <form className="form-authoriz">
    <AuthorizFields
      text1="Your Username"
      text2="Password"
      type1="text"
      type2="password"
    />
    <AuthorizButton />
  </form>
);

export default FormAuthoriz;
