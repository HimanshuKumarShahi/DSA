class Solution:
    def evenOddRearrange(self, nums):
        '''
        nums: List[int] - array of integers to be rearranged
        Returns a list with even integers in the beginning followed by odd integers.
        '''
        return sorted(nums, key=lambda x: x % 2)

# -------------------------------------------

class Solution:
    def evenOddRearrange(self, nums):
        evenNumbers = []
        oddNumbers = []
        for num in nums:
            if num % 2 == 0:
                evenNumbers.append(num)
            else:
                oddNumbers.append(num)
        return evenNumbers + oddNumbers