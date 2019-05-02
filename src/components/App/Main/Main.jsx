import React from 'react';
import './Main.scss';
import Catalog from './catalog/catalog';
import News from './news/news';
import MainCarousel from './MainCarousel/MainCarousel';
import Items from './items/items';

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
