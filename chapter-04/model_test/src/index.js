import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <Provider store="{store}">
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
