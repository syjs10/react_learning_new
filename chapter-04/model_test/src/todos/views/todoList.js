import React { Component, PropTypes } from 'react';
import connect from 'react-redux';
import TodoItem from './todoItem.js';
import { toggleTodo, removeTodo } from './actions.js';
import { FilterTypes } from '../../constants.js';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map(
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                )
            }
        </ul>
    );
};
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};