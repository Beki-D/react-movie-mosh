import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        count: 2,
        imageUrl: 'https://picsum.photos/200',
        tags: [1, 2, 3, 4]
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    renderTags() {
        if (this.state.tags.length === 0) return <h1>No tags to display</h1>;

        return <ul>{this.state.tags.map(tag => <li key={tag.toString()}>{tag}</li>)}</ul>;
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    handleIncrement = () => {
        // console.log("Increase clicked", this);
        this.setState({ count: this.state.count + 1});
    };

    render() { 
        return (
            <>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.styles} className={ this.getBadgeClasses() }>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement} className="btn btn-warning btn-sm">Increase</button>
                
                {this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()}
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning rounded-pill" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        const zero = <h1>Nothing to display</h1>

        return count === 0 ? 'zero' : this.state.count;
    }
}
 
export default Counter;