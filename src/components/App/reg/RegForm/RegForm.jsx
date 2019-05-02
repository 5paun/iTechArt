import React from 'react';
import './RegForm.scss';
import SectionField from './SectionField/SectionField';
import AuthorizButton from '../../authoriz/FormAuthoriz/AuthorizButton/AuthorizButton';

const RegForm = () => (
  <form className="reg-form">
    <SectionField />
    <SectionField />
    <SectionField />
    <AuthorizButton />
  </form>
);

export default RegForm;
