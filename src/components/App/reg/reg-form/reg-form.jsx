import React from 'react';
import './reg-form.scss';
import SectionField from './section-field/section-field';
import AuthorizButton from '../../authoriz/form-authoriz/authoriz-button/authoriz-button';

const RegForm = () => (
  <form className="reg-form">
    <SectionField />
    <SectionField />
    <SectionField />
    <AuthorizButton />
  </form>
);

export default RegForm;
