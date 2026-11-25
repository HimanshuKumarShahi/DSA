class Solution {
  moveZeroes(nums) {
    // nums: an array of integers
    // Rearrange the array in place
      let i = 0;
      for(let j = 0; j < nums.length; j++){
          if(nums[j] != 0){
              nums[i] = nums[j];
              i+=1;
          }
      }

      while(i < nums.length){
          nums[i] = 0;
          i+=1
      }
    return;
  }
}