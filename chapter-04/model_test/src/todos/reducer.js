import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType.js';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:{
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed,
                },
                ...state
            ];
        };
        case TOGGLE_TODO:{
            return state.map((todoItem) => {
                if (action.id === todoItem.id) {
                    return {...todoItem, completed: !todoItem.completed};
                } else {
                    return todoItem;
                }
            });
        };
        case REMOVE_TODO:{
            return state.filter((todoItem) => {
                return action.id !== todoItem.id;
            });
        }
        default:{
            return state;
        }
    }
};