import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './ControlPanel.js';
ReactDOM.render(
    <ControlPanel /> ,
    document.getElementById('root')
);
registerServiceWorker();