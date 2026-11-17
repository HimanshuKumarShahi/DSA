let n = 2345;

if (n === null) {
  console.log("Cancelled");
} else {
  if (isNaN(n)) {
    console.log("Invalid Input");
  }

  if (n > 0) {
    let rev = 0;
    while (n > 0) {
      let rem = n % 10;
      console.log(`remainder`, rem);
      rev = rev * 10 + rem;
      console.log(`reverse value working`, rev);
      n = Math.floor(n / 10);
      console.log(`number breaking working`, n);
    }
    console.log("Reversed number", rev);
  } else {
    console.log("Number should be positive or above 0");
  }
}
