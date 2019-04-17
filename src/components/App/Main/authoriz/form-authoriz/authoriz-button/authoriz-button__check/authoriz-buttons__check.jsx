import React from 'react';
import './authoriz-buttons__check.scss';

const AuthorizButtonsCheck = props => (
  <span className="authoriz-buttons__check">
    <label>
      <input type="checkbox" name="remember" />
      {props.text}
    </label>
  </span>
);

export default AuthorizButtonsCheck;
