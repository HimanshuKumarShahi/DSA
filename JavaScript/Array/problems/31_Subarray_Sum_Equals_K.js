/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prefixSumCount = new Map();

    prefixSumCount.set(0, 1);

    let currentSum = 0;
    let count = 0;

    for (let num of nums) {
        currentSum += num;

        if (prefixSumCount.has(currentSum - k)) {
            count += prefixSumCount.get(currentSum - k);
        }

        let existingCount = prefixSumCount.get(currentSum) || 0;
        prefixSumCount.set(currentSum, existingCount + 1);
    }

    return count;

};