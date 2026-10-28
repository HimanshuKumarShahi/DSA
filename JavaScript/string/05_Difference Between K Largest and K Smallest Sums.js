class Solution {
  /**
   * Compute the absolute difference between the sum of the k largest elements
   * and the sum of the k smallest elements in the array.
   *
   * @param {number[]} nums - The input integer array.
   * @param {number} k - The number of largest/smallest elements to consider.
   * @return {number} The absolute difference as an integer.
   */
  differenceBetweenKLargestAndKSmallest(nums, k) {
    // Your implementation goes here.
    // Return a default integer value.
    nums.sort((a, b) => a - b);
    
    let smallestSum = 0;
    let largestSum = 0;
    const n = nums.length;
    
    for (let i = 0; i < k; i++) {
      smallestSum += nums[i];
      largestSum += nums[n - 1 - i];
    }
    
    return Math.abs(largestSum - smallestSum);
  }
}