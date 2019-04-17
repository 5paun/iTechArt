import React from 'react';
import './authoriz.scss';
import AuthorizTitle from './authoriz__title/authoriz__title';
import FormAuthoriz from './form-authoriz/form-authoriz';

const Authoriz = () => (
  <div className="authoriz">
    <AuthorizTitle title="Sign In Now!" text="Sign in and tell us what you think of the site!" />
    <FormAuthoriz />
  </div>
);

export default Authoriz;
