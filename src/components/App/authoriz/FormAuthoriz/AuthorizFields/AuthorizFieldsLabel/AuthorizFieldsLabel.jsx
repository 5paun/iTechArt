import React from 'react';
import './AuthorizFieldsLabel.scss';

const AuthorizFieldsLabel = props => (
  <label className="authoriz-fields__label">
    {props.text}
    <input type={props.type} name="name" />
  </label>
);

export default AuthorizFieldsLabel;
