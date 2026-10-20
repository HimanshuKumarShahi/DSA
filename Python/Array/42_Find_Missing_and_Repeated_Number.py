class Solution:
    def findErrorNums(self, nums):
        n = len(nums)
        num_count = [0] * (n + 1)
        duplicate = -1
        missing = -1

        for num in nums:
            num_count[num] += 1

        for i in range(1, n + 1):
            if num_count[i] == 2:
                duplicate = i
            elif num_count[i] == 0:
                missing = i
        
        return [duplicate, missing]