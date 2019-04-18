import React from 'react';
import './section-field.scss';
import SectionTitle from './section-title/section-title';
import AuthorizFields from '../../../authoriz/form-authoriz/authoriz-fields/authoriz-fields';

const SectionField = () => (
  <section className="section-field">
    <SectionTitle number="1" title="First Name &amp; Address" />
    <AuthorizFields />
  </section>
);

export default SectionField;
