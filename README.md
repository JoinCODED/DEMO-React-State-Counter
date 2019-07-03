presentation : https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY

1. Add alerts to both buttons with onClick event

```javascript
<button onClick={alert('increase')} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={alert('decrease')} className="btn btn-danger">-</button>
```

2. Fix the onClick

```javascript
<button onClick={() => alert('increase')} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={() => alert('decrease')} className="btn btn-danger">-</button>
```

3. Create two methods for the increase and decrease and change the onClick events

```javascript
increase = () => alert('increase');

decrease = () => alert('decrease');

...

<button onClick={this.increase} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={this.decrease} className="btn btn-danger">-</button>
```

4. Send an argument to the increase method

```javascript
increase = name => alert(`hello ${name}`);

<button onClick={this.increase("Lailz")} className="btn btn-success">
  +
</button>;
```

5. Put function call inside arrow function

```javascript
increase = name => alert(`hello ${name}`);

<button onClick={() => this.increase("Lailz")} className="btn btn-success">
  +
</button>;
```

6. Introduce Class-Based components & convert `App.js` into a class-based component

7. Import `{Component}` & add render method

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      ...
    )
  }
}

export default App;
```

8. Add a `state` with the number

```javascript
state = { number: 0 };
```

9. Change the number in the p tag to the state number

```javascript
<p className="inline">{this.state.number}</p>
```

10. Change the state in the functions

```javascript
increase = () => {
  const newNumber = this.state.number + 1;
  this.setState({ number: newNumber });
};

decrease = () => {
  const newNumber = this.state.number - 1;
  this.setState({ number: newNumber });
};
```
