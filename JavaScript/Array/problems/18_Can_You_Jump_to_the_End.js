class Solution {
  canJump(nums) {
    // nums: an array of non-negative integers representing your maximum jump length at that position
    // Your implementation here
    let long = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i > long) {
        return false;
      }
      long = Math.max(long, i + nums[i]);
    }
    return true;
  }
}
