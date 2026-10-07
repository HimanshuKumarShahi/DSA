class Solution {
  isValidMountainArray(arr) {
    // arr: array of integers
    // Returns true if the array forms a valid mountain, else false

    if (arr.length < 3) return false;

    let i = 0;

    while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
      i++;
    }

    if (i === 0 || i === arr.length - 1) {
      return false;
    }

    while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
      i++;
    }
    return i == arr.length - 1;
  }
}
