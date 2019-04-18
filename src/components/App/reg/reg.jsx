import React from 'react';
// import './reg.scss';
import AuthorizTitle from '../authoriz/authoriz__title/authoriz__title';
import RegForm from './reg-form/reg-form';

const Reg = () => (
  <main>
    <div className="authoriz">
      <AuthorizTitle title="Sign In Now!" text="Sign in and tell us what you think of the site!" />
      <RegForm />
    </div>
  </main>
);

export default Reg;
