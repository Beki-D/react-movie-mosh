import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        console.log("Counters - Rendered");

        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

        return (
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>

            {counters.map( count => (
                <Counter 
                    key={count.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement} 
                    counter={count}>
                        <h4>Item - {count.id}</h4>
                </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;