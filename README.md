presentation : https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY

1. Add alerts to both buttons with `onClick` event

   ```jsx
   <button onClick={alert('increase')} className="btn btn-success">+</button>
   <p className="inline">0</p>
   <button onClick={alert('decrease')} className="btn btn-danger">-</button>
   ```

2. Fix the `onClick`. It **has** to receive a function.

   ```jsx
   <button onClick={() => alert('increase')} className="btn btn-success">+</button>
   <p className="inline">0</p>
   <button onClick={() => alert('decrease')} className="btn btn-danger">-</button>
   ```

3. Create two functions for the increase and decrease and pass them to the `onClick` events:

   ```jsx
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

   ```jsx
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

5. Introduce the concept of hooks.

6. Convert the `number` variable into a `useState` hook.
   Change the number in the `p` tag to the state number.
   Show the state in the Dev Tools.
   Show that it can be modified in the dev tools and it will affect the app!

   ```jsx
   const [number, setNumber] = useState(0);

   ...

      <p className="inline">{number}</p>
   ```

7. Convert the functions into methods.
   Change the state **manually** in the functions.
   Show that this we lead to an error because state is read only`.

   ```jsx
   increase = () => {
    number++;
    console.log(number);
   };

   decrease = () => {
    number--;
    console.log(number);
   };
   ...
       <button className="btn btn-success" onClick={increase}>
         +
       </button>
      <p className="inline">{number}</p>
       <button className="btn btn-danger" onClick={decrease}>
         -
       </button>
     ...
   ```
8. Introduce setState (setNumber)

```javascript
   increase = () => {
      setNumber(number + 1);
    console.log(number);
   };

   decrease = () => {
      setNumber(number - 1);
    console.log(number);
   };

```

9. Refactor into a single method:

   ```jsx
   changeNumber = (step) => {
     const newNumber = number + step;
     setNumber(newNumber);
   };
   ```

10. Discuss how to pass arguments to event handlers:

   This won't work, it will run the function immediately:

   ```jsx
   <button className="btn btn-success" onClick={changeNumber(1)}>
     +
   </button>
   <p className="inline">{number}</p>
   <button className="btn btn-danger" onClick={changeNumber(-1)}>
     -
   </button>
   ```

   Wrap the call to `changeNumber` in an anonymous function:

   ```jsx
   <button className="btn btn-success" onClick={() => changeNumber(1)}>
     +
   </button>
   <p className="inline">{number}</p>
   <button className="btn btn-danger" onClick={() => changeNumber(-1)}>
     -
   </button>
   ```
