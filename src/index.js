import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from 'App';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <Global />
    <App />
    </BrowserRouter>,
  document.getElementById('root'),
);
