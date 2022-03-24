/* 
async-await
Nothing but promises which look better.

Two best practices to keep in mind:

Use async-await as much as possible.
Always take care of the error handling as well.
*/

async function printDataFromServer() {
  const serverData = await anyPromiseWhichWillReturnData(); // .then(data => { sksksksksksk(), sjskssks()})
  console.log(serverData);
}

// notice that function need an `async` keyword.

// Doing this in es6 arrow function would be

const printDataFromServer = async () => {
  try {
    const serverData = await anyPromiseWhichWillReturnData();
    console.log(serverData);
  } catch (err) {
    console.error(err);
  }
};

/*
  Note: In arrow the async keyword is used before the ().
  While in normal functions, it is used before the `function` keyword itself
*/
