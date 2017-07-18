import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import display from './reducer.js';

ReactDOM.render(<Provider store = {createStore(display, applyMiddleware(thunk, logger))}><App /></Provider>,
document.getElementById('root')
)
