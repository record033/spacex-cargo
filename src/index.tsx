import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { CargoDataContextProvider } from 'src/contexts';

import { Pages } from './pages/Pages';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CargoDataContextProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </CargoDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
