/* 
## ex4: use setTimeOut()

### challenge

- Learn how to use `setTimeout()`
- Now, write a function that takes a message and a delay and print that message after the delay.
*/

const printMsgWithDelay = (msg, delay) => {
  setTimeout(() => {
    console.log(msg);
  }, delay);
};

printMsgWithDelay("ved", 5000);

/* 
### understanding

`setTimeout()` places the callback function on the event queue after the given time.

### remember

- It doesn't guarantee time
- `setTimeout(fn, 0)` is used to do calculation when callstack is empty. Therefore not blocking the render.
*/

// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('C'), 0)
// setTimeout(() => console.log('B'), 0)

// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 400)
// setTimeout(() => console.log('C'), 1300)

// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 400)
// setTimeout(() => console.log('C'), 1300)
