import React from 'react';
import './AuthorizTitle.scss';

const AuthorizTitle = props => (
  <h1 className="authoriz__title">
    {props.title}
    <span>{props.text}</span>
  </h1>
);

export default AuthorizTitle;
