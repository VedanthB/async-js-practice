/* 
## h/w ex10: understand promise constructor

Tanay has made a fakeFetch implementation for the class.

Understand how to make your own promises and make your own version of `fakeFetch()`. Discuss this with your team.

*/

const fakeFetch = (msg, shouldReject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(console.log("Rejected"));
      }
      resolve(console.log(`from server: ${msg}`));
    }, 3000);
  });
};

fakeFetch("hi", true);
