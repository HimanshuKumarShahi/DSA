class Solution {
  findErrorNums(nums) {
    const n = nums.length;
    const numCount = new Array(n + 1).fill(0);
    let duplicate = -1, missing = -1;

    for (let num of nums) {
      numCount[num]++;
    }

    for (let i = 1; i <= n; i++) {
      if (numCount[i] === 2) {
        duplicate = i;
      } else if (numCount[i] === 0) {
        missing = i;
      }
    }

    return [duplicate, missing];
  }
}