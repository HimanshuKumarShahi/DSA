class Solution {
  checkForGoodSubarraySum(nums, k) {
    // nums: an array of integers
    // k: an integer
    
    // Your implementation here
      const remaindermap=new Map()
      remaindermap.set(0,-1);

      let runningsum=0;

      for(let i=0;i<nums.length;i++){
          runningsum+=nums[i]

          let remainder=runningsum%k;

          if(remaindermap.has(remainder)){
              if(i-remaindermap.get(remainder)>=2){
                  return true
              }
          }else{
              remaindermap.set(remainder,i)
          }
      }
    return false;
  }
}