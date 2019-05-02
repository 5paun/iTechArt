import React, { Component } from 'react';

class Items extends Component {
  async componentDidMount() {
    const response = await fetch('http://localhost:3000/Items.json');
    const items = await response.json();
    console.log(items);
  }

  render() {
    return <div>Hello</div>;
  }
}

export default Items;
