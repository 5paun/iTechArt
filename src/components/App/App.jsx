import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import Authoriz from './authoriz/authoriz';
import Reg from './reg/reg';
import Admin from './admin/admin';

const App = props => (
  <div className="app-wrapper">
    <Header />
    <Route path="/main" render={() => <Main />} />
    <Route path="/authoriz" render={() => <Authoriz />} />
    <Route path="/reg" render={() => <Reg />} />
    <Route
      path="/admin"
      render={() => <Admin state={props.state.adminPage} addProduct={props.addProduct} />}
    />
    <Footer />
  </div>
);

export default App;
