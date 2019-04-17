import React from 'react';
import './authoriz-button.scss';
import AuthorizButtonsCheck from './authoriz-button__check/authoriz-buttons__check';
import AuthorizButtonsForgot from './authoriz-button__forgot/authoriz-buttons__forgot';
import AuthorizButtonsSubmit from './authoriz-buttons__submit/authoriz-buttons__submit';

const AuthorizButton = () => (
  <div className="authoriz-buttons">
    <AuthorizButtonsCheck text="Remember me" />
    <AuthorizButtonsForgot />
    <AuthorizButtonsSubmit />
  </div>
);

export default AuthorizButton;
