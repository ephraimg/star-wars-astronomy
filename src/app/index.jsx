
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducer';
import { App } from './containers/App/App';
import './styles.css'; // to let webpack plugin find styles

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));
