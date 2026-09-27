class Solution:
    def majorityElement(self, nums):
        '''
        nums: List[int] where a majority element always exists
        Return: int, the majority element
        '''
        count = 0;
        number = None

        for i in nums:
            if count == 0:
                number = i
            if i == number:
                count+=1
            else:
                count-=1
        return number