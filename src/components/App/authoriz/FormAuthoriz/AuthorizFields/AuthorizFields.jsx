import React from 'react';
import './AuthorizFields.scss';
import AuthorizFieldsLabel from './AuthorizFieldsLabel/AuthorizFieldsLabel';

const AuthorizFields = props => (
  <div className="authoriz-fields">
    <AuthorizFieldsLabel type={props.type1} text={props.text1} />
    <AuthorizFieldsLabel type={props.type2} text={props.text2} />
  </div>
);

export default AuthorizFields;
