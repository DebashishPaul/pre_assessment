import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

