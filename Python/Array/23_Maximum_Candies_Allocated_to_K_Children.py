class Solution(object):
    def maximumCandies(self, candies, k):
        """
        :type candies: List[int]
        :type k: int
        :rtype: int
        """
        if sum(candies) < k:
            return 0
            
        left = 1
        right =max(candies)
        answer = 0
        
        while left <= right:

            mid = (left + right) // 2
            count = 0
            
            for pile in candies:
                count += pile // mid
            
            if count >= k:
                answer = mid
                left = mid + 1
            else:
                right = mid - 1
        return answer