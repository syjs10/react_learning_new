import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
        this.state = {};
    }
    refInput(node) {
        this.input = node;
    }
    onSubmit(ev) {
        ev.preventDefault();
        const input = this.input;
        if (!input.value.trim()) {
            return ;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }
    render() {
        return (
            <div className="add-todo">
                <form action="" onSubmit={this.onSubmit}>
                    <input type="text" className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    };
}

export default connect(null, mapDispatchToProps)(AddTodo);