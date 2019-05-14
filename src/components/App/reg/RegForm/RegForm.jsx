import React from 'react';
import './RegForm.scss';
import SectionField from './SectionField/SectionField';
// import AuthorizButton from '../../authoriz/FormAuthoriz/AuthorizButton/AuthorizButton';
import AuthorizButtonsSubmit from '../../authoriz/FormAuthoriz/AuthorizButton/AuthorizButtonsSubmit/AuthorizButtonsSubmit';
import RegButtonPrivacy from '../../authoriz/FormAuthoriz/AuthorizButton/RegButton/RegButtonPrivacy/RegButtonPrivacy';

const RegForm = () => (
  <form className="reg-form">
    <SectionField
      number="1"
      title="First Name &amp; Address"
      text1="Your Full Name"
      text2="Your Username"
      type1="text"
      type2="text"
    />
    <SectionField
      number="2"
      title="Email &amp; Phone"
      text1="Email Address"
      text2="Phone Number"
      type1="email"
      type2="text"
    />
    <SectionField
      number="3"
      title="Passwords"
      text1="Password"
      text2="Confirm Password"
      type1="password"
      type2="password"
    />
    <AuthorizButtonsSubmit />
    <RegButtonPrivacy />
  </form>
);

export default RegForm;
