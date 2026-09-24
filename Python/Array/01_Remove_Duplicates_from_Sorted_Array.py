# from numpy import *


# arr=array([1,2,3,1,2,2,3,3,4,5,6,6,6,6])

# i=0
# j=1

# if not arr:
#      return 0

# for j in range(len(arr)):
#     if(arr[i] != arr[j]):
#         i+1
#     arr[i] = arr[j]

# return i + 1

class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        i=0
        for j in range(1,len(nums)):
            if(nums[j] != nums[i]):
                i+=1
            nums[i]=nums[j]
        return i+1