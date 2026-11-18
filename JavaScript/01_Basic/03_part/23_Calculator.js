let keepRunning = true;

while (keepRunning) {
  let operation = "/";

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

  let a = 45,
    b = 27;
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
    console.log("Division:", Math.floor(a / b));
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
}
