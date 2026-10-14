class Solution:
    def check_for_good_subarray_sum(self, nums, k):
        '''
        nums: List[int] - an array of integers
        k: int - an integer
        '''
        remainder_map = {0: -1}
        
        current_sum = 0
        
        for i, num in enumerate(nums):
            current_sum += num
            
            remainder = current_sum % k if k != 0 else current_sum
            
            if remainder in remainder_map:
                if i - remainder_map[remainder] >= 2:
                    return True
            else:
                remainder_map[remainder] = i
                
        return False
