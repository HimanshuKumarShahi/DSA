class Solution {
  merge(arr1, m, arr2, n) {
    // arr1: first sorted array with length m+n
    // m: number of actual elements in arr1
    // arr2: second sorted array with length n
    // n: number of elements in arr2
    
    // Your implementation here
      let i = m - 1;
      let j = n - 1;
      let k = ( m + n ) - 1;

      while( i >= 0 && j >= 0){
          if(arr1[i] > arr2[j]){
              arr1[k] = arr1[i]
              i--;
          }else{
              arr1[k] = arr2[j]
              j--;
          }
          k--;
      }
      while (j >= 0) {
          arr1[k] = arr2[j]
          j--;
          k--;
      }
  }
}