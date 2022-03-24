/* 
- **6.2** Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.

*/

const countdown = (countdown) => {
  let intervalID = setInterval(() => {
    console.log(countdown);

    countdown = countdown - 1;
  }, 1000);

  setTimeout(() => {
    console.log("bang bang");
    clearInterval(intervalID);
  }, (countdown + 1) * 1000);
};

countdown(5);
