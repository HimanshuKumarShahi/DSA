class Solution {
  commonFruitsInBaskets(array1, array2) {
    // array1: the first array of integers
    // array2: the second array of integers

      let set1 = new Set(array1);
      let set2 = new Set(array2);
      let number =[]

      for(let i of set1){
          if(set2.has(i)){
              number.push(i);
          }
      }
      return number
  }
}