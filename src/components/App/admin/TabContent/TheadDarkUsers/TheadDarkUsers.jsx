import React from 'react';
import './TheadDarkUsers.scss';
import TheadDarkTh from './TheadDarkTh/TheadDarkTh';

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
