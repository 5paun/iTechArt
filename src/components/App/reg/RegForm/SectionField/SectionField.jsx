import React from 'react';
import './SectionField.scss';
import SectionTitle from './SectionTitle/SectionTitle';
import AuthorizFields from '../../../Authoriz/FormAuthoriz/AuthorizFields/AuthorizFields';

const SectionField = () => (
  <section className="section-field">
    <SectionTitle number="1" title="First Name &amp; Address" />
    <AuthorizFields />
  </section>
);

export default SectionField;
