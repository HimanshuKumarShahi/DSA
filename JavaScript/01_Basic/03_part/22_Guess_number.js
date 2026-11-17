let random_number = Math.floor(Math.random() * 100) + 1;
let guess = -1;

while (guess !== random_number) {
  guess = console.log("Enter value: (guess the number)");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid guess number! try again b/w (1 to 100)");
    continue;
  }
  if (guess > random_number) {
    console.log("Too high, try again");
  } else if (guess < random_number) {
    console.log("Too low , try again");
  } else {
    console.log(
      "Nice! Congrats 😉🎉🎉 Number is:",
      guess,
      "Random Number:",
      random_number,
    );
  }
}
