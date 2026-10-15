/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

     let map = {}; 

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let left = target - num; 
        
        if (left in map) {
            return [map[left], i];
        }
        
        map[num] = i;
    }
    
    return [];
};