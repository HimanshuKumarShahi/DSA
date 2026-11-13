let n = 12;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        console.log(i);
      }
    }
    console.log(n);
  } else {
    console.log("Number should be positive or above 0");
  }
}
