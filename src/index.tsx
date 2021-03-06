import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './firebase';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);