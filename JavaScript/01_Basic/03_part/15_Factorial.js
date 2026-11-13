let n = 5;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(`Factorial of ${n} is : ${fact}`);
  } else {
    console.log("Number should be positive or above 0");
  }
}
