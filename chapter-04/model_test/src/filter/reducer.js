import { SET_FILTER } from './actionTypes.js';
import { FilterTypes } from '../constanst.js';

export default (state = FilterTypes.ALL, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return actioin.filter;
        }
        default: {
            return state;
        }
    }
};
