/* 
## h/w ex6: setInterval

### challenge

- learn how setInterval works
- **6.1** write a function which takes a message and time. The function should print that  message every X interval.

*/

const logNameWithInterval = (name, interval) => {
  setInterval(() => {
    console.log(name);
  }, interval);
};

logNameWithInterval("ved", 1000);
