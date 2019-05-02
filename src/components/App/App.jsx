import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Authoriz from './Authoriz/Authoriz';
import Reg from './Reg/Reg';
import Admin from './Admin/Admin';

const App = props => (
  <div className="app-wrapper">
    <Header />
    <Route path="/main" render={() => <Main />} />
    <Route path="/authoriz" render={() => <Authoriz />} />
    <Route path="/reg" render={() => <Reg />} />
    <Route
      path="/admin"
      render={() => (
        <Admin
          state={props.state.adminPage}
          addProductItem={props.addProductItem}
        />
      )}
    />
    <Footer />
  </div>
);

export default App;
