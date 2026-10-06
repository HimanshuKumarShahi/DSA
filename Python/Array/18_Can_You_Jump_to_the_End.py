class Solution:
    def canJump(self, nums):
        '''
        nums: list of non-negative integers representing your maximum jump length at that position
        '''
        long = 0
        
        for i, jump in enumerate(nums):
          
            if i > long:
                return False
                
            long=max(long , i+jump)

        return True
