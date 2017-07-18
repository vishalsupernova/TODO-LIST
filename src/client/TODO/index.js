import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import Todo from './reducer.js';
import {applyMiddleware, createStore} from 'redux'

ReactDOM.render(<Provider store = {createStore(Todo, applyMiddleware(logger))}>
    <App />
</Provider>,
    document.getElementById('root'));
