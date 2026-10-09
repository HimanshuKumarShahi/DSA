class Solution:
    def maximizeLoot(self, nums):
        '''
        nums: List[int] - An array representing the amount of money in each house
        Return: int - The maximum amount of money that can be robbed
        '''
        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]
    

        prev2 = 0
        prev1 = 0 
    
        for num in nums:
        
            current = max(prev1, num + prev2)
        
            prev2 = prev1
            prev1 = current
        
        return prev1
       
