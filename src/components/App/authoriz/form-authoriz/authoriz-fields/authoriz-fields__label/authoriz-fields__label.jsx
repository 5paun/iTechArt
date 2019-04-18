import React from 'react';
import './authoriz-fields__label.scss';

const AuthorizFieldsLabel = props => (
  <label className="authoriz-fields__label">
    {props.text}
    <input type="text" name="name" />
  </label>
);

export default AuthorizFieldsLabel;
