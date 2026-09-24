class Solution {
  search(nums, target) {
    // nums: an array of integers sorted in ascending order
    // target: the integer to be searched in nums
    
    // Your implementation here
      let left = 0;
      let right = nums.length - 1;

      while(left <= right){
          let mid = Math.floor((left + right) / 2);

          if(nums[mid] === target){
              return mid;
          }else if(nums[mid] < target){
              left = mid + 1;
          }else{
              right = mid -1;
          }   
      }
    return -1;
  }
}