/* 
## live ex16: use async-await to do waterfall

### challenge

Do question number 14 with async-await this time.
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

const syncCallsToServer = async (msg1, msg2) => {
  try {
    let dataFromMsg1 = await fakeFetch(msg1);
    let dataFromMsg2 = await fakeFetch(msg2);

    console.log({ msg1: dataFromMsg1, msg2: dataFromMsg2 });
  } catch (error) {
    console.log(error);
  }
};

syncCallsToServer("ved", "veddd");
