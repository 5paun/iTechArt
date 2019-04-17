import React from 'react';
import './authoriz__title.scss';

const AuthorizTitle = props => (
  <h1 className="authoriz__title">
    {props.title}
    <span>{props.text}</span>
  </h1>
);

export default AuthorizTitle;
