import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {number : 0}
  }

  increase = () => {
    this.setState({number : this.state.number+1})
  }

  decrease = () => {
    this.setState({number : this.state.number-1})
  }

  render() {
    return (
      <div className="App" >
      <button onClick={this.increase} className="btn btn-success">+</button>
        <p className="inline">{this.state.number}</p>
      <button onClick={this.decrease} className="btn btn-danger">-</button>
        
      </div>
    );
  }
}

export default App;
