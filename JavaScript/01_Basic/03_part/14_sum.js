let n = 5;

if (isNaN(n)) {
  console.log("Invalid Number.");
} else {
  if (n > 0) {
    let sum = 0;
    console.log("Is positive");
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(`Sum of natural number from 1 to ${n} is = ${sum}`);
  } else {
    console.log("Number should be positive or more than zero.");
  }
}
