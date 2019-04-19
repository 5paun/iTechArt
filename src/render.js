import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { addProduct } from './redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addProduct={addProduct} />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
