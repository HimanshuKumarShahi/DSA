/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {

    arr2.sort((a, b) => a - b);
    let distanceValue = 0;


    for (let x of arr1) {
        let left = 0;
        let right = arr2.length - 1;
        let isValid = true;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (Math.abs(x - arr2[mid]) <= d) {
                isValid = false;
                break; 
            }

            if (arr2[mid] < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (isValid) {
            distanceValue++;
        }
    }

    return distanceValue;
};