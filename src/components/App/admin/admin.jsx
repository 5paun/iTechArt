import React from 'react';
import './admin.scss';
import NavTabs from './nav-tabs/nav-tabs';
import TabContent from './tab-content/tab-content';

const Admin = () => (
  <main>
    <div className="container wrapper">
      <div className="row">
        <div className="col">
          <NavTabs />
          <TabContent />
        </div>
      </div>
    </div>
  </main>
);

export default Admin;
