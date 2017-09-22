import React, { Component } from 'react';
import store from '../Store.js';
class Summary extends Component {
    render() {
        const {sum} = this.props;
        return (
            <div>Total Count: {sum} </div>
        );
    }
}
class SummaryContainer extends Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = this.getOwnState();
    }
    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for(var key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return {sum: sum}
    }
    componentDidMount() {
        store.subscribe(this.onUpdate);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onUpdate);
    }
    onUpdate() {
        this.setState(this.getOwnState());
    }
    render() {
        return (
            <Summary sum={this.state.sum} />
        );
    }
}
export default SummaryContainer;