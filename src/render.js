import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { addProductItem } from './redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addProductItem={addProductItem} />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
