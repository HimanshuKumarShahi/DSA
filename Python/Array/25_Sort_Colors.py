class Solution:
    def sortColors(self, nums):
        '''
        nums: List[int] - list of integers where 0=red, 1=white, 2=blue
        '''
        # Sort the list in-place to be in the order of red, white, and blue
        
        # Your implementation here
        low=0
        mid = 0
        high = len(nums)-1

        while (mid <= high):
            if(nums[mid]==0):
                [nums[low],nums[mid]]= [nums[mid],nums[low]]
                low+=1
                mid+=1
            elif(nums[mid]==1):
                mid+=1
            else:
                [nums[mid] , nums[high]]=[nums[high] ,nums[mid]]
                high-=1