import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Authoriz from './authoriz/authoriz';
import Reg from './reg/reg';
import Admin from './admin/admin';
import Items from '../../Items';

const App = props => (
  <React.Fragment>
    <Header />
    <Route path="/main" render={() => <Main />} />
    <Route path="/authoriz" render={() => <Authoriz />} />
    <Route path="/reg" render={() => <Reg />} />
    <Route
      path="/admin"
      render={() => (
        <Admin adminPage={props.state.adminPage} dispatch={props.dispatch} />
      )}
    />
    <Footer />
    <Items />
  </React.Fragment>
);

export default App;
