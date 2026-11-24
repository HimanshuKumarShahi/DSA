let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a Number:"));

console.log(n);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" * ");
  }
  console.log();
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(` ${j} `);
  }
  console.log();
}

for (let i = 1; i <= n; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(` ${String.fromCharCode(ascii)} `);
    ascii += 1;
  }
  console.log();
}
