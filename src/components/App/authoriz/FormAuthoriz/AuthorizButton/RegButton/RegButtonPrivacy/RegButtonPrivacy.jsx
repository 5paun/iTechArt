import React from 'react';
import './RegButtonPrivacy.scss';

const RegButtonPrivacy = props => (
  <span className="section-button__privacy">
    <input type="checkbox" name="agree" />
    You agree to our Terms and Policy.
  </span>
);

export default RegButtonPrivacy;
