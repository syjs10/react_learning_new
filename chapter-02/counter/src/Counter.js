import React, { Component, PropTypes } from 'react';

class Counter extends Component {
    constructor(props) {

        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        console.log('enter constructor: ' + this.props.caption);

        this.state = {
            count: props.initValue
        };
    }
    componentWillMount() {
        console.log('enter componentWillMount: ' + this.props.caption);
    }
    componentDidMount() {
        console.log('enter componentDidMount: ' + this.props.caption);
    }
    // onClickIncrementButton() {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }
    // onClickDecrementButton(){
    //     this.setState({
    //         count: this.state.count - 1
    //     });
    // }
    onClickIncrementButton() {
        this.updateCount(true);
    }

    onClickDecrementButton() {
        this.updateCount(false);
    }

    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

        this.setState({
            count: newValue
        });
        this.props.onUpdate(newValue, previousValue);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }
    render() {
        console.log('enter render: ' + this.props.caption);

        const {caption} = this.props;
        var buttonStyle = {
            margin: '5px'
        }
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{ caption } count: {this.state.count}</span>
            </div>
        );
    }
}
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
};
export default Counter;