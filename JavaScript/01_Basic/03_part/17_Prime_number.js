let n = 3;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    for (let i = 2; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        console.log("Not Prime");
        break;
      }
    }
    console.log(`Prime 1,${n}`);
  } else {
    console.log("Number should be positive or above 0");
  }
}
