let keepRunning = true;

while (keepRunning) {
  let prompt = require('prompt-sync')();
  let operation = prompt("Give your operation or exit.");

  if (
    operation === null ||
    operation === "exit" ||
    operation === "EXIT" ||
    operation === "q"
  ) {
    keepRunning = false;
    console.log("Calculator Closed.");
    break;
  }

  let a = prompt("Value of Number 1->"),
    b = prompt("Value of Number 2->");
  if (isNaN(a) || isNaN(b)) {
    console.log("Please insert valid input!");
    break;
  }

  if (operation == "+") {
    console.log("Addition:", a + b);
    break;
  }

  if (operation == "-") {
    console.log(
      "Subtraction:",
      a - b ? console.log("Subtraction not possible.") : b - a,
    );
    break;
  }

  if (operation == "/") {
    console.log("Division:", a / b);
    break;
  }

  if (operation == "%") {
    console.log("Remainder:", a % b);
    break;
  }

  if (operation == "*") {
    console.log("Multiplication:", a * b);
    break;
  }
  console.log("Confirm do you want to exit or perform more operations.");
}
