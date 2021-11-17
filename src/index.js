import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import ProductsContextProvider from './context/ProductsContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>
  </React.StrictMode>,
  rootElement
);
