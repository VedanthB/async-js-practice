/* 
live ex12: print data on success, print error on failure#
challenge#
Call fakeFetch(msg, true) to get a rejected promise. Handle the error with the error handler. Show a message using console.error for errors.

*/

const fakeFetch = (msg, shouldReject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Rejected");
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
};

fakeFetch("hi", true)
  .then((msg) => console.log(msg + " \n datatataata"))
  .catch((err) => console.log(err));
