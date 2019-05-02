import React from 'react';
import './TabContent.scss';
import AddUser from './AddUser/AddUser';
import AddProduct from './AddProduct/AddProduct';
import TheadDarkUsers from './TheadDarkUsers/TheadDarkUsers';
import TheadDarkProducts from './TheadDarkProducts/TheadDarkProducts';
import ButtonAddProduct from './ButtonAddProduct/ButtonAddProduct';

const TabContent = props => (
  <div className="tab-content" id="my-tab-content">
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <table className="table users-table">
        <TheadDarkUsers />
        {/* <tbody id="add-user" /> */}
        <AddUser users={props.state.users} />
      </table>
    </div>
    <div
      className="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <ButtonAddProduct />
      <table className="table products-table">
        <TheadDarkProducts />
        <AddProduct products={props.state.products} />
        {/* <tbody id="add-product" /> */}
      </table>
    </div>
  </div>
);

export default TabContent;
