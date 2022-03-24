/* 
## ex2: write your own function which takes a callback

### challenge

Write a function `strLength()` which takes

1. Your name
2. A function which it will call with the length of your name

Now, call this function with the two parameters.

1. Your name. This is simple.
2. A function. This function will get the length of the string. Use that length to print a message: `OMG! my name is X char long!`


*/

const strLength = (name, callback) => {
  let length = name.length;

  return callback(length);
};

const callback = (length) => `OMG! Your nae is ${length} long`;

const result = strLength("ved", callback);
