class Solution {
  rotateArray(nums, k) {
    // nums: array of integers
    // k: number of steps to rotate the array to the right
    if (nums.length === 0) return;

    let n = nums.length;
    k = k % n;

    nums.reverse();

    const firstPart = nums.splice(0, k);
    firstPart.reverse();
    nums.splice(0, 0, ...firstPart);

    const secondPart = nums.splice(k);
    secondPart.reverse();
    nums.splice(k, 0, ...secondPart);

    return nums;
  }
}
