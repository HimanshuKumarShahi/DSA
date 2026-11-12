// 4888 - 500 -> 9 notes of 500
// 4888 - 4500 = 388 - 200 -> 1 note
// 188 - 100 -> 1 notes
// 88 - 50 -> 1 note
// 38 - 20 -> 1 note
// 18 - 10 -> 1 note
// 8 - 5 ->1 - ₹5 - coin
// 3 - 2 -> 1 - ₹2 - coin
// 1 -> 1 - ₹1 - coin

let amount = 5234;

if (amount >= 500) {
  console.log(`₹500 Notes - ${Math.floor(amount / 500)}`);
  amount = amount % 500;
}
if (amount >= 200) {
  console.log(`₹200 Notes - ${Math.floor(amount / 200)}`);
  amount = amount % 200;
}
if (amount >= 100) {
  console.log(`₹100 Notes - ${Math.floor(amount / 100)}`);
  amount = amount % 100;
}
if (amount >= 50) {
  console.log(`₹50 Notes - ${Math.floor(amount / 50)}`);
  amount = amount % 50;
}
if (amount >= 20) {
  console.log(`₹20 Notes - ${Math.floor(amount / 20)}`);
  amount = amount % 20;
}
if (amount >= 10) {
  console.log(`₹10 Notes - ${Math.floor(amount / 10)}`);
  amount = amount % 10;
}
if (amount >= 5) {
  console.log(`₹5 coins - ${Math.floor(amount / 5)}`);
  amount = amount % 5;
}
if (amount >= 2) {
  console.log(`₹2 coins - ${Math.floor(amount / 2)}`);
  amount = amount % 2;
}
if (amount === 1) {
  console.log(`₹1 coins - ${Math.floor(amount / 1)}`);
}
