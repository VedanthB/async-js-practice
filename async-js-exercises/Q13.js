/* 
live ex14: waterfall data#
challenge#
Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.

understanding#
Think of this as a situation where you need to get userID from the server to get the order data for the user. You would need userID as part of the query to get order. How would you do that?
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

const syncCallsToServer = (msg1, msg2) => {
  fakeFetch(msg1).then((dataFromMsg1) =>
    fakeFetch(msg2).then((dataFromMsg2) => {
      console.log({ msg1: dataFromMsg1, msg2: dataFromMsg2 });
    })
  );
};

syncCallsToServer("ved", "veddd");
