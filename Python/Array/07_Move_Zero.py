class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        i = 0
        for j in range(len(nums)):
            if(nums[j] != 0):
               nums[j] , nums[i] = nums[i] , nums[j] # using Swap method.
               i+=1


class Solution:
    def moveZeroes(self, nums):
        '''
        nums: List[int] - an array of integers
        Rearrange the array in place
        '''
        i = 0

        for j in range(len(nums)):
            if(nums[j] != 0):
                nums[i] = nums[j]
                i+=1

        while(i < len(nums)):
            nums[i] = 0
            i+=1