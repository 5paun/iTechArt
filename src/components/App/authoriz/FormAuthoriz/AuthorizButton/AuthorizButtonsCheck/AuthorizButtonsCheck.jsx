import React from 'react';
import './AuthorizButtonsCheck.scss';

const AuthorizButtonsCheck = props => (
  <span className="authoriz-buttons__check">
    <label>
      <input type="checkbox" name="remember" />
      {props.text}
    </label>
  </span>
);

export default AuthorizButtonsCheck;
