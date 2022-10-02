import React, { Component } from 'react'

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data
            console.log("Makin Ajax call to fetch new data from server")
        }
    }

    componentWillUnnmount() {
        console.log("X Counter - Unnmount");
    }

    render() {
        console.log("Counter - Rendered");

        return (
            <>
                {this.props.children}
                
                <span style={this.styles} className={ this.getBadgeClasses() }>
                    {this.formatCount()}
                </span>
                
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-warning btn-sm">
                    Increase {this.props.counter.value}
                </button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </>
        );
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning rounded-pill" : "primary";
        return classes;
    }

    formatCount() {
        const {value, id} = this.props.counter;
        //const zero = <h1>Nothing to display</h1>

        return value === 0 ? 'zero' : value + id;
    }
}
 
export default Counter;