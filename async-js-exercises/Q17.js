/* 
h/w important: parallel calls in async-await#
We did the synchronous fakeFetch() fall. How would you do two parallel calls without 
blocking each other?

How to catch different errors in async await? In promises as well.
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

const parallelCallsToServer = async (promise1, promise2) => {
  const [result1, result2] = await Promise.all([promise1, promise2]);

  return [result1, result2];
};

const result = parallelCallsToServer(fakeFetch("hello"), fakeFetch("world"));
result;
