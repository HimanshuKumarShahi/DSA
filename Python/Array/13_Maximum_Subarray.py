class Solution:
    def findMaxSubarraySum(self, nums):
        '''
        nums: List[int] - an array of integers
        Returns maximum sum of contiguous subarray
        '''
        max_sum = current_sum = nums[0]

        for i in nums[1:]:
            if(current_sum < 0):
                current_sum = 0
            current_sum = current_sum + i
            max_sum = max(current_sum ,max_sum )
        return max_sum
        
