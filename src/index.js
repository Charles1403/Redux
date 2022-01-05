/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';// this is a package that helps to create a store easily.
import { Provider } from 'react-redux'; // this is a package that helps to determine which components have access to the store.
import userReducer from './features/user'


// a store is what helps hold states.
const store = configureStore({
  reducer: {
    user: userReducer,
  }, // a reducer is function that takes the previous value of state, an action that you want to perform on the state and returns a new value of that state. In redux before you can create a state you have to have a reducer for it.
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
