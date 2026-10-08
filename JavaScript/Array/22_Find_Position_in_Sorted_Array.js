class Solution {
  findInsertPosition(nums, target) {
    // nums: an array of distinct integers sorted in increasing order
    // target: the value to find the position for

    // Your implementation here
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
}
