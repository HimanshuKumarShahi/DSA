let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a Number:"));

console.log(n);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2; j++) {
    if (i == j || i + j == n * 2) {
      process.stdout.write(" * ");
    } else {
      process.stdout.write("   ");
    }
  }
  console.log();
}
