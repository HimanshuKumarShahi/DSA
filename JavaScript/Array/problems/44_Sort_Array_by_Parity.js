class Solution {
  evenOddRearrange(nums) {
    // nums: array of integers to rearrange
    // Returns an array with even integers in the beginning followed by odd integers.
    const evenNumbers = [];
    const oddNumbers = [];
    for (const num of nums) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
    }
    return evenNumbers.concat(oddNumbers);
  }
}