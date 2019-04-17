import React from 'react';
import './nav-tabs.scss';

const NavTabs = () => (
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item">
      <a
        className="nav-link active"
        id="home-tab"
        data-toggle="tab"
        href="#home"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        Users
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        id="profile-tab"
        data-toggle="tab"
        href="#profile"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        Products
      </a>
    </li>
  </ul>
);

export default NavTabs;
