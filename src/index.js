import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import ThunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchKittens, requestKittens } from './reducers';
import App from "./containers/App1";
import './index.css';
import reportWebVitals from './reportWebVitals';
import "tachyons";


const logger = createLogger();
const rootReducers = combineReducers({searchKittens, requestKittens})
const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware ,logger));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
