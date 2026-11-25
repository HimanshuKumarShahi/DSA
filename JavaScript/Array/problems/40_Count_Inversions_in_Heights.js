class Solution {
  countInversions(arr) // arr: integer array containing the heights
  // Implement your solution to count inversions
  {
    return this.mergeSortAndCount(arr, 0, arr.length - 1);
  }

  mergeSortAndCount(arr, left, right) {
    let count = 0;
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      count += this.mergeSortAndCount(arr, left, mid);
      count += this.mergeSortAndCount(arr, mid + 1, right);
      count += this.mergeAndCount(arr, left, mid, right);
    }
    return count;
  }

  mergeAndCount(arr, left, mid, right) {
    const leftSub = arr.slice(left, mid + 1);
    const rightSub = arr.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;
    let invCount = 0;

    while (i < leftSub.length && j < rightSub.length) {
      if (leftSub[i] <= rightSub[j]) {
        arr[k++] = leftSub[i++];
      } else {
        arr[k++] = rightSub[j++];
        invCount += leftSub.length - i;
      }
    }

    while (i < leftSub.length) {
      arr[k++] = leftSub[i++];
    }

    while (j < rightSub.length) {
      arr[k++] = rightSub[j++];
    }

    return invCount;
  }
}
