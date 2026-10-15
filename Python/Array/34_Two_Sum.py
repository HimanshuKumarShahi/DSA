class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map={}

        for i,num in enumerate(nums):
            left = target - num
            if left in map:
                return[map[left],i]
            map[num]=i

        return []
