import React from 'react';
import './SectionField.scss';
import SectionTitle from './SectionTitle/SectionTitle';
import AuthorizFields from '../../../authoriz/FormAuthoriz/AuthorizFields/AuthorizFields';

const SectionField = props => (
  <section className="section-field">
    <SectionTitle number={props.number} title={props.title} />
    <AuthorizFields
      type1={props.type1}
      type2={props.type2}
      text1={props.text1}
      text2={props.text2}
    />
  </section>
);

export default SectionField;
