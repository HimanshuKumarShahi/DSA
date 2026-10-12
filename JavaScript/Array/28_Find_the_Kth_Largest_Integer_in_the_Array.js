/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    nums.sort((a, b) => {

        if (a.length != b.length) {
            return b.length - a.length;
        }

        if (b > a) return 1;
        else return -1;
    }
    );
    return nums[k - 1];
};