class Solution {
  findMaxSubarraySum(nums) {
    // nums: an array of integers
    // TODO: Implement the logic to find the highest sum of contiguous subarray
    let max=nums[0];
    let current=nums[0];
    for(let i=1;i<nums.length;i++)
    {
        current=Math.max(nums[i], current + nums[i]);

        max=Math.max(max , current);
    }
    return max;
  }
}