class Solution {
  majorityElement(nums) {
    // nums: array of integers where a majority element always exists
    // Return: the majority element
      let count = 1;
      let number=nums[0];
        for (let i of nums) {
            if (count === 0){
                number = i
                count = 1;
            }
            else if (i === number){
                count += 1;
            }
            else {
                count -= 1
            }
        }
    return number;
  }
}