import React from 'react';
import './admin.scss';
import NavTabs from './nav-tabs/nav-tabs';
import TabContent from './tab-content/tab-content';
import PopupAddProduct from './popup-add-product/popup-add-product';

const Admin = props => (
  <main>
    <div className="container wrapper">
      <div className="row">
        <div className="col">
          <NavTabs />
          <TabContent state={props.state} />
          <PopupAddProduct addProduct={props.AddProduct} />
        </div>
      </div>
    </div>
  </main>
);

export default Admin;
