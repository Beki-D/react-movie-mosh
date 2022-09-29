import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        value: this.props.counter.value
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
    };

    render() {
        return (
            <>
                {this.props.children}
                <span style={this.styles} className={ this.getBadgeClasses() }>
                    {this.formatCount()}
                </span>
                
                <button onClick={() => this.handleIncrement(this.state.value)} className="btn btn-warning btn-sm">
                    Increase {this.props.value}
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.value === 0) ? "warning rounded-pill" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        //const zero = <h1>Nothing to display</h1>

        return count === 0 ? 'zero' : this.state.value;
    }
}
 
export default Counter;