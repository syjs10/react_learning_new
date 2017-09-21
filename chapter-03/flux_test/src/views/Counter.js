import React, { Component, PropTypes} from 'react';
import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';
const buttonStyle = {
  margin: '10px'
};
class Counter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        };
    }
    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }
    componentWileUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }
    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({
            count: newCount
        });
    }
    onClickIncrementButton() {
        Actions.increment(this.props.caption);
    }
    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }
    render() {
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{this.props.caption} count: {this.state.count}</span>
            </div>
        );
    }
}
Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;