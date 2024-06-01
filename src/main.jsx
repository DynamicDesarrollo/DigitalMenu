
// src/main.jsx (o index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root'); // Obtén el contenedor
const root = ReactDOM.createRoot(container); // Crea una raíz con createRoot

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
