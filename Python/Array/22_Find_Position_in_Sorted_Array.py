class Solution:
    def findInsertPosition(self, nums, target):
        '''
        nums: List[int] - a list of distinct integers sorted in ascending order
        target: int - the target value to search the index for
        '''
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return left