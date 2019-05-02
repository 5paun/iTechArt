import React from 'react';
import './admin.scss';
import NavTabs from './NavTabs/NavTabs';
import TabContent from './TabContent/TabContent';
import PopupAddProduct from './PopupAddProduct/PopupAddProduct';

const Admin = props => (
  <main>
    <div className="container wrapper">
      <div className="row">
        <div className="col">
          <NavTabs />
          <TabContent state={props.state} />
          <PopupAddProduct addProductItem={props.addProductItem} />
        </div>
      </div>
    </div>
  </main>
);

export default Admin;
