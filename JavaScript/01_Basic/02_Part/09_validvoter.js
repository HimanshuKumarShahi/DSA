//  let age="rakesh"
let age = 11;

console.log(typeof age);

if (isNaN(age)) {
  console.log("Please enter valid input");
} else if (age >= 18) {
  console.log("You are eligible for voting.");
} else {
  console.log("--Not eligible for voting --");
}
