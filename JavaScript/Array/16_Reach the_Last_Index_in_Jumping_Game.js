class Solution {
  canJump(nums) {
    // nums: array of integers representing jump lengths
    // Returns true if the last index can be reached, otherwise false
    let max_reach = 0;

    for (let i = 0; i < nums.length; i++) {
      if (i > max_reach) {
        return false;
      }
      max_reach = Math.max(max_reach, i + nums[i]);
      if (max_reach >= nums.length - 1) {
        return true;
      }
    }
    return false;
  }
}
