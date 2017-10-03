import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem.js';
import { FilterTypes } from '../../constants.js';
import { toggleTodo, removeTodo } from '../action.js';


const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => {
                    <TodoItem
                        key={item.id}
                        onToggle={()=>{onToggleTodo(item.id)}}
                        onRemove={()=>{onRemoveTodo(item.id)}}
                        completed={item.completed}
                        text={item.text}
                    />
                })
            }
        </ul>
    );
}
TodoList.PropTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTools = (todos, filter) => {
    switch (filter){
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter((item) => {return item.completed});
        case FilterTypes.UNCOMPLETED:
            return todos.filter((item) => {return !item.completed});
        default:
            throw new Error('no this type');
    }
}

const mapStateToProps = (state) => {
    return selectVisibleTools(state.todos, state.filter);
};

const mapDispatchToProps = (state) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);