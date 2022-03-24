/* 
## live ex13: chaining

### challenge

Create a function `getServerResponseLength(msg)` This function will use `fakeFetch()` internally with the message and return 
the length of the response received by the server.

Note: Instead of returning the response from the server this **should return the length**.

Hint: It will return in a promise.
*/

const fakeFetch = (msg, shouldReject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("rejected");
      }
      resolve(`from server ${msg}`);
    }, 3000);
  });
};

const getServerResponseLength = (msg) => {
  fakeFetch(msg)
    .then((msg) => console.log(msg.length))
    .catch((err) => console.log(err));
};

getServerResponseLength("hello");
