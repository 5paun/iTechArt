import React from 'react';
// import './Reg.scss';
import AuthorizTitle from '../authoriz/AuthorizTitle/AuthorizTitle';
import RegForm from './RegForm/RegForm';

const Reg = () => (
  <main>
    <div className="authoriz">
      <AuthorizTitle
        title="Sign In Now!"
        text="Sign in and tell us what you think of the site!"
      />
      <RegForm />
    </div>
  </main>
);

export default Reg;
