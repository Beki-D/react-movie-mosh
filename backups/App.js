import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters"

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 10},
        {id: 3, value: 40},
        {id: 4, value: 50},
    ]
  };

  constructor(props) {
    super(props);
    console.log('App - Constructed', this.props);
  }

  //perfect for Ajax applications
  componentDidMount() {
    //Ajax call
    console.log("App - Mounted")
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);

      counters[index] = {...counter};
      counters[index].value++;
      // console.log(this.state.counters[index]);
      this.setState({counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };

  handleDelete = counterID => {
      const counters = this.state.counters.filter(c => c.id !== counterID);
      this.setState({counters});
  }

  render() {
    console.log("App - Rendered")
    
    return (
      <>
        <NavBar totalCounters={this.state.counters.filter( c => c.value > 0).length}/>
        
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} 
          />
        </main>
      </>
    );
  }
}

export default App;
