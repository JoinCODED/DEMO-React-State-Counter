1. add alerts to both buttons with onClick event

```javascript
<button onClick={alert('increase')} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={alert('decrease')} className="btn btn-danger">-</button>
```

2. fix the onClick

```javascript
<button onClick={() => alert('increase')} className="btn btn-success">+</button>
<p className="inline">0</p>
<button onClick={() => alert('decrease')} className="btn btn-danger">-</button>
```

3. create two functions for the increase and decrease and change the onClick events

```javascript
increase() {
  alert('increase')
}

decrease() {
  alert('decrease')
}

...

<button onClick={this.increase} className="btn btn-success">+</button>
    <p className="inline">0</p>
<button onClick={this.decrease} className="btn btn-danger">-</button>
```

4. create a constructor with the number state

```javascript
constructor(props){
  super(props)
  this.state = { number : 0 }
}
```

5. change the number in the p tag to the state number

```javascript
<p className="inline">{this.state.number}</p>
```

6. change the state in the functions

```javascript
increase() {
  const newNumber = this.state.number++;
  this.setState({ number: newNumber })
}

decrease() {
  const newNumber = this.state.number--
  this.setState({ number: newNumber })
}
```

7. bind the methods in the constructor

```javascript
constructor(props) {
  ...
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
}
```
