import React from "react";
import "./App.css";

class App extends Component {
  state = { number: 0 };

  changeNumber = step => {
    const newNumber = this.state.number + step;
    this.setState({ number: newNumber });
  };

  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.changeNumber(1)}
          className="btn btn-success"
        >
          +
        </button>
        <p className="inline">{this.state.number}</p>
        <button
          onClick={() => this.changeNumber(-1)}
          className="btn btn-danger"
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
