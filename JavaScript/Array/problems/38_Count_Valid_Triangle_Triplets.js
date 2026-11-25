class Solution {
  countValidTriangleTriplets(nums) {
    // nums: integer array of side lengths
    // default return for count of valid triangles
    nums.sort((a, b) => a - b);
    let count = 0;
    const n = nums.length;

    for (let k = n - 1; k >= 2; k--) {
      let i = 0;
      let j = k - 1;
      while (i < j) {
        if (nums[i] + nums[j] > nums[k]) {
          count += j - i;
          j--;
        } else {
          i++;
        }
      }
    }

    return count;
  }
}
