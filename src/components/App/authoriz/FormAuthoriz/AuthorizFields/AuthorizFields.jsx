import React from 'react';
import './AuthorizFields.scss';
import AuthorizFieldsLabel from './AuthorizFieldsLabel/AuthorizFieldsLabel';

const AuthorizFields = () => (
  <div className="authoriz-fields">
    <AuthorizFieldsLabel text="Your Username" />
    <AuthorizFieldsLabel text="Password" />
  </div>
);

export default AuthorizFields;
