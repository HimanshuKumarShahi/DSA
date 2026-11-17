let n = 99992345;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      sum += rem;
      n = Math.floor(n / 10);
    }
    console.log(sum);
  } else {
    console.log("Number should be positive or above 0");
  }
}
