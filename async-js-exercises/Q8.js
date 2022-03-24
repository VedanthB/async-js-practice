/* 
# promises

A promise is a obj that represents that eventual completion or rejection on an async task.

three states → pending, fulfil , reject 

## ex8: why promises?

### challenge

In an interview, someone asks you to explain why `promises()` are better and why you should prefer them over `callbacks()`. What will be your answer?

- easy to read
- to avoid callback hell

*/

/* 
## ex9: states of promise

### challenge

In an interview,

- explain how promise work
- explain the different states of promise
    - pending, fulfill, reject.
- syntax of promise consumption

*/

/* 
  promises are objs that represent the eventual completion or failure of 
   an async task and its value

  they have three states : pending  , fulfilled , rejected

  they guarantee us a result 
 */

// callAPromise().then(successHandler).catch(rejectHandler)

// // for example consider a pizza  shop

let pizza_shop_open = true;

// initially in pending state
const makePizzaShopWork = () => {
  return new Promise((resolve, reject) => {
    if (pizza_shop_open) {
      resolve(console.log("lets bake some cheesy pizzas"));
    } else {
      reject(console.log("oven is down, cant bake"));
    }
  });
};

makePizzaShopWork()
  .then(() => console.log("please place your order"))
  .then(() => console.log("you're order will be ready asappp"))
  .catch(() => console.log("opps were not working rn, please come back later"))
  .finally(() => console.log("thanks for coming, please visit again"));
