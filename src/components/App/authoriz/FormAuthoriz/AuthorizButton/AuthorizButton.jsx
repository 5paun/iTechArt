import React from 'react';
import './AuthorizButton.scss';
import AuthorizButtonsCheck from './AuthorizButtonsCheck/AuthorizButtonsCheck';
import AuthorizButtonsForgot from './AuthorizButtonsForgot/AuthorizButtonsForgot';
import AuthorizButtonsSubmit from './AuthorizButtonsSubmit/AuthorizButtonsSubmit';

const AuthorizButton = () => (
  <div className="authoriz-buttons">
    <AuthorizButtonsCheck text="Remember me" />
    <AuthorizButtonsForgot />
    <AuthorizButtonsSubmit />
  </div>
);

export default AuthorizButton;
