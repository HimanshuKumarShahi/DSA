class Solution {
  plusOne(digits) {
    // digits: number[] - array of digits representing a non‑negative integer (most significant digit first).
    // Return a new array of digits representing the integer plus one.
    // Your implementation here.
      for(let i=digits.length-1;i>=0;i--){
          digits[i]+=1;
          
          if(digits[i]<9){
              return digits;
          }
          digits[i]=0;
      }
    digits.unshift(1);
    return digits;
  }
}