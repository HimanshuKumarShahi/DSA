class Solution:
    def differenceBetweenKLargestAndKSmallest(self, nums, k):
        """
        Compute the absolute difference between the sum of the k largest elements
        and the sum of the k smallest elements in the array.

        :param nums: List[int] - The input integer array.
        :param k: int - The number of largest/smallest elements to consider.
        :return: int - The absolute difference.
        """
        # Your implementation goes here.
        nums.sort()
        
        smallest_sum = sum(nums[:k])
        largest_sum = sum(nums[-k:])
        
        return abs(largest_sum - smallest_sum)
