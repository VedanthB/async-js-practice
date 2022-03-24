/* 
## live ex15: use async-await with fakeFetch

### challenge

Given the syntax above. Call `fakeFetch()` with some msg and use await to get the data and then print it.

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

const asyncFunc = async () => {
  try {
    let result = await fakeFetch("msg");

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();
