import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

export const increment = (counterCaption) => {
    AppDispatcher.dispatcher({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatcher({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    });
};