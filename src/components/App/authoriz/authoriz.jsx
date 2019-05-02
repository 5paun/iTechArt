import React from 'react';
import './Authoriz.scss';
import AuthorizTitle from './AuthorizTitle/AuthorizTitle';
import FormAuthoriz from './FormAuthoriz/FormAuthoriz';

const Authoriz = () => (
  <main>
    <div className="authoriz">
      <AuthorizTitle
        title="Sign In Now!"
        text="Sign in and tell us what you think of the site!"
      />
      <FormAuthoriz />
    </div>
  </main>
);

export default Authoriz;
