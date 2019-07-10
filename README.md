presentation : https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY

1. Add alerts to both buttons with `onClick` event

```javascript
<button onClick={alert('increase')} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={alert('decrease')} className="btn btn-danger">-</button>
```

2. Fix the `onClick`. It **has** to receive a function.

```javascript
<button onClick={() => alert('increase')} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={() => alert('decrease')} className="btn btn-danger">-</button>
```

3. Create two functions for the increase and decrease and pass them to the `onClick` events:

```javascript
const increase = () => alert('increase');

const decrease = () => alert('decrease');

...

<button onClick={increase} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={decrease} className="btn btn-danger">-</button>
```

4. Add a variable to track the number.
   Increment/decrement it manually in the `increase` and `decrease` functions.
   Show that it **is** changing (`console.log`).
   Explain that for these changes to show up on screen our component has to **rerender**.
   For that we need state.

```javascript
let number = 0;

const increase = () => {
  number++;
  console.log(number);
};

const decrease = () => {
  number--;
  console.log(number);
};

return (
  <div className="App">
    <button className="btn btn-success" onClick={increase}>
      +
    </button>
    <p className="inline">{number}</p>
    <button className="btn btn-danger" onClick={decrease}>
      -
    </button>
  </div>
);
```

5. Introduce the concept of Class-Based components.

6. Convert `App.js` into a class-based component.
   Import `{Component}` and add render method.

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

7. Convert the `number` variable into a `state` property.
   Change the number in the `p` tag to the state number.
   Show the state in the Dev Tools.
   Show that it can be modified in the dev tools and it will affect the app!

```javascript
state = { number: 0 };

...

<p className="inline">{this.state.number}</p>
```

8. Convert the functions into methods.
   Change the state **manually** in the functions.
   Show that this **is** updating `state` but it doesn't work because there is no rerender.
   Show the warning in the console about manually updating state.

```javascript
increase = () => {
  this.state.number++;
  console.log(this.state.number);
};

decrease = () => {
  this.state.number--;
  console.log(this.state.number);
};
...
    <button className="btn btn-success" onClick={this.increase}>
      +
    </button>
    <p className="inline">{this.state.number}</p>
    <button className="btn btn-danger" onClick={this.decrease}>
      -
    </button>
  ...
```

9. Introduce `setState` the secret sauce of react!

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

10. Refactor into a single method:

```javascript
changeNumber = step => {
  const newNumber = this.state.number + step;
  this.setState({ number: newNumber });
};
```

12. Discuss how to pass arguments to event handlers:

This won't work, it will run the function immediately:

```javascript
<button className="btn btn-success" onClick={this.changeNumber(1)}>
  +
</button>
<p className="inline">{this.state.number}</p>
<button className="btn btn-danger" onClick={this.changeNumber(-1)}>
  -
</button>
```

Wrap the call to `this.changeNumber` in an anonymous function:

```javascript
<button className="btn btn-success" onClick={() => this.changeNumber(1)}>
  +
</button>
<p className="inline">{this.state.number}</p>
<button className="btn btn-danger" onClick={() => this.changeNumber(-1)}>
  -
</button>
```
