// "Hello World"

console.log("Hello");
console.log("World");

// Second method
// work only in Node Environment.

process.stdout.write("Hello ");
process.stdout.write("World");

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a Number:"));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    // console.log(" * ");
    process.stdout.write(" * ")
  }
  console.log();  
}

// console.log("*");
// console.log("*");
// console.log("*");
// console.log("*");
// console.log("*");

// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
