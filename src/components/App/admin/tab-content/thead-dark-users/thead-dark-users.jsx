import React from 'react';
import './thead-dark-users.scss';
import TheadDarkTh from './thead-dark__th/thead-dark__th';

const TheadDarkUsers = () => (
  <thead className="thead-dark">
    <tr>
      <TheadDarkTh title="#" />
      <TheadDarkTh title="First Name" />
      <TheadDarkTh title="Last Name" />
      <TheadDarkTh title="Email" />
      <TheadDarkTh title="Remove request" />
      <TheadDarkTh title="Remove user" />
    </tr>
  </thead>
);

export default TheadDarkUsers;
