import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import Auth from './Reducers/Authnetication';
import questions from './Reducers/questions';
import users from './Reducers/user';
import { Provider } from 'react-redux'
import applyMiddleware from './middleware/index';
import rootReducer from '../src/Reducers/combine';
 



const store = createStore(rootReducer, applyMiddleware);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
