import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/index.css'

// Routes
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

// Persist Redux
import { PersistGate } from 'redux-persist/integration/react';

// Env
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
