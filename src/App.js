import React from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const newNumber = this.state.number + 1;
    this.setState({ number: newNumber });
  }

  decrease() {
    const newNumber = this.state.number - 1;
    this.setState({ number: newNumber });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increase} className="btn btn-success">
          +
        </button>
        <p className="inline">{this.state.number}</p>
        <button onClick={this.decrease} className="btn btn-danger">
          -
        </button>
      </div>
    );
  }
}

export default App;
