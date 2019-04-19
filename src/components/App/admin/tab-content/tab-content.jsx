import React from 'react';
import './tab-content.scss';
import AddUser from './add-user/add-user';
import AddProduct from './add-product/add-product';
import TheadDarkUsers from './thead-dark-users/thead-dark-users';
import TheadDarkProducts from './thead-dark-products/thead-dark-products';
import ButtonAddProduct from './button-add-product/button-add-product';

const TabContent = props => (
  <div className="tab-content" id="my-tab-content">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <table className="table users-table">
        <TheadDarkUsers />
        {/* <tbody id="add-user" /> */}
        <AddUser users={props.state.users} />
      </table>
    </div>
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
