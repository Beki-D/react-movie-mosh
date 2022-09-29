import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 10},
            {id: 3, value: 40},
            {id: 4, value: 50},
        ]
    };

    handleDelete = counterID => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters});
    }

    render() { 
        return (
        <div>
            {this.state.counters.map( count => (
                <Counter 
                    key={count.id} 
                    value={count.value} 
                    counter={count}>
                        <h4>Counter - {count.id}</h4>
                </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;