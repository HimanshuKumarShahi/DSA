class Solution {
  smallestNumberAfterRemovingKDigits(num, k) {
    // num: a string representing a non-negative integer
    // k: number of digits to remove
    // Return: a string representing the smallest possible integer
    let stack = [];

    for (let i = 0; i < num.length; i++) {
      let digits = num[i];
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digits) {
        stack.pop();
        k--;
      }
      stack.push(digits);
    }
    while (k > 0) {
      stack.pop();
      k--;
    }
    const result = stack.join("").replace(/^0+/, "");
    
    return result.length > 0 ? result : "0";
  }
}
