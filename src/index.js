import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import './assets/styles/amazonStyles.css'
import rootReducer from './store/reducer';
import { legacy_createStore as createStore } from 'redux';


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
