let n = 145;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    let n1 = n;
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      let fact = 1;
      for (let i = 1; i <= rem; i++) {
        fact *= i;
      }
      sum += fact;
      n = Math.floor(n / 10);
    }

    console.log(`sum : ${sum} and number given by user is ${n1}`);

    if (n1 === sum) console.log("Strong Number ");
    else console.log("Not Strong.");
    
  } else {
    console.log("Number should be positive or above 0");
  }
}
