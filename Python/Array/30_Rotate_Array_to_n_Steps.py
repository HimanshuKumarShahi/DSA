class Solution:
    def rotateArray(self, nums, k):
        '''
        nums: list of integers
        k: int, number of steps to rotate the array to the right
        '''
        n = len(nums)
        k=k % n

        nums.reverse()
        nums[:k] = reversed(nums[:k])
        nums[k:] = reversed(nums[k:])

        return nums