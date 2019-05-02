import React from 'react';
import './Main.scss';
import Catalog from './Catalog/Catalog';
import News from './News/News';
import MainCarousel from './MainCarousel/MainCarousel';
import Items from './Items/Items';

const Main = () => (
  <main>
    <div className="container wrapper">
      <div className="row">
        <div className="col-md-3">
          <Catalog />
          <News />
        </div>
        <div className="col-md-9">
          <MainCarousel />
          <Items />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
