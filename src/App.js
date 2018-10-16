import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="btn btn-success">+</button>
        <p className="inline">0</p>
        <button className="btn btn-danger">-</button>
      </div>
    );
  }
}

export default App;
