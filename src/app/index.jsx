
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';
import './styles.css'; // to let webpack plugin find styles

ReactDOM.render(
    <App />
, document.getElementById('app'));
