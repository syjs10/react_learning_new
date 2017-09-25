import { ADD_TODO, TOGGLE_T0DO, REMOVE_TODO } from './actionTypes.js';
let nextTodoId = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId ++,
    text: text
});
export const toggleTodo = (id) =>({
    type: TOGGLE_T0DO,
    id: id
});
export const removeTodo = (id) =>({
    type: REMOVE_TODO,
    id: id
});