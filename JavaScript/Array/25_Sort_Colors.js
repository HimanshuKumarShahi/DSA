class Solution {
  sortColors(nums) {
    // nums: array of integers where 0=red, 1=white, 2=blue
    // Sort the array in-place to be in the order of red, white, and blue
    let low=0;
    let mid=0;
    let high=nums.length-1;

      while (mid <= high) {
          if(nums[mid]===0){
              [nums[low],nums[mid]]= [nums[mid],nums[low]];
              low++
              mid++
          }else if(nums[mid]===1){
              mid++
          }else{
              [nums[mid] , nums[high]]=[nums[high] ,nums[mid]];
              high--
          }
      }
    // Your implementation here
  }
}