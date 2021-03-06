import React, { Component } from 'react';
import Counter from './Counter.js';
class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        };
    }
    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({
            sum: this.state.sum + valueChange
        });
    }
    render() {
        return (
            <div>
                <Counter onUpdate={this.onCounterUpdate}caption="First"  initValue={this.initValues[0]} />
                <Counter onUpdate={this.onCounterUpdate}caption="Second" initValue={this.initValues[1]} />
                <Counter onUpdate={this.onCounterUpdate}caption="Third"  initValue={this.initValues[2]} />
                <hr/>
                <span>{this.state.sum}</span>
            </div>
        );
    }
}

export default ControlPanel;