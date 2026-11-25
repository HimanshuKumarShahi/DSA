class Solution {
    maximizeLoot(nums) {
        // nums: number[] - An array representing the amount of money in each house
        // Return: number - The maximum amount of money that can be robbed
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        let prev2 = 0; 
        let prev1 = 0; 

        for (let num of nums) {
            let current = Math.max(prev1, num + prev2);
            prev2 = prev1;
            prev1 = current;
    }

    return prev1;
    }
}