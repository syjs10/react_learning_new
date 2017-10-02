import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem.js';
import { toggleTodo, removeTodo } from '../actions.js';
import { FilterTypes } from '../../constants.js';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />

                ))
            }
        </ul>
    );
};
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTools = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error("Unspport Filter");
    }
}
const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTools(state.todos, state.filter)
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
