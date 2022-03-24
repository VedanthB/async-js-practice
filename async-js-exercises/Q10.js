/* 


live ex11: print data on success

challenge

use the fakeFetch() to get data and show on success.

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

fakeFetch("hi").then((msg) => console.log(msg + " \n datatataata"));
