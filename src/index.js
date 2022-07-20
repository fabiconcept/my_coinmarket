import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mobile.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);