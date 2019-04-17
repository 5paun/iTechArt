import React from 'react';
import './authoriz-fields.scss';
import AuthorizFieldsLabel from './authoriz-fields__label/authoriz-fields__label';

const AuthorizFields = () => (
  <div className="authoriz-fields">
    <AuthorizFieldsLabel text="Your Username" />
    <AuthorizFieldsLabel text="Password" />
  </div>
);

export default AuthorizFields;
