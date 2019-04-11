import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <div className="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
