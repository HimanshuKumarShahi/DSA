class Solution:
    def countValidTriangleTriplets(self, nums):
        '''
        nums: List[int] - list of integers representing side lengths
        '''
        nums.sort()
        count = 0
        n = len(nums)

        for k in range(n - 1, 1, -1):
            
            i = 0
            j = k - 1
            while i < j:
                
                if nums[i] + nums[j] > nums[k]:
                    count += j - i
                    j -= 1
                else:
                   i += 1 
        return count

