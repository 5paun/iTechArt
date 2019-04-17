import React from 'react';
import './Main.scss';
import Catalog from './catalog/catalog';
import News from './news/news';
import MainCarousel from './main-carousel/main-carousel';
import Items from './items/items';
import Authoriz from './authoriz/form-authoriz/form-authoriz';
import Reg from './reg/reg';
import NavTabs from './nav-tabs/nav-tabs';
import TabContent from './tab-content/tab-content';

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
        {/* <div className="col">
          <NavTabs />
          <TabContent />
        </div> */}
      </div>
    </div>
    {/* <Authoriz /> */}
    {/* <Reg /> */}
  </main>
);

export default Main;
