import React from 'react';
import './admin.scss';
import NavTabs from './NavTabs/NavTabs';
import TabContent from './TabContent/TabContent';
import PopupAddProductContainer from './PopupAddProduct/PopupAddProductContainer';

const Admin = props => (
  <main>
    <div className="container wrapper">
      <div className="row">
        <div className="col">
          <NavTabs />
          <TabContent store={props.store} />
          <PopupAddProductContainer store={props.store} />
        </div>
      </div>
    </div>
  </main>
);

export default Admin;
