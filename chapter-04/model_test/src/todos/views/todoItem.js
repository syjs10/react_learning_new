import React, { PropTypes } from 'react';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked:true} : {};
    return (
        <li
            className="todo-item"
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >
            <input type="checkbox" className="toggle" {...checkedProp} readOnly onClick={onToggle}/>
            <label htmlFor="" className="text">{text}</label>
            <button className="remove" onClick={onRemove}>x</button>
        </li>
    );
};
TodoItem.PropTypes={
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
export default TodoItem;