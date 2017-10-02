import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp.js';
import store from './Store.js';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
