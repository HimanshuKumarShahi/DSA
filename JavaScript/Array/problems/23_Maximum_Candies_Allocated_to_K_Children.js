/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    let left = 1
    let right = Math.max(...candies)
    let answer = 0

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0

        for (let i = 0; i < candies.length; i++) {
            count += Math.floor(candies[i] / mid);
        }
        if (count >= k) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
};