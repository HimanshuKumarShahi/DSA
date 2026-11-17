let n = 13;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    // for (let i = 2; i <= Math.floor(n / 2); i++) {
    //   if (n % i === 0) {
    //     console.log("Not Prime");
    //     break;
    //   }
    // }
    // console.log(`Prime 1,${n}`);
    console.log(isPrime(n));
  } else {
    console.log("Number should be positive or above 0");
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
