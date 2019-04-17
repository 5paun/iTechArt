import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
