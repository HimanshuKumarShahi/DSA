class Solution(object):
    def kthLargestNumber(self, nums, k):
        """
        :type nums: List[str]
        :type k: int
        :rtype: str
        """
        nums.sort(key=int)
        return nums[-k]

# ---------------------------------------

# class Solution(object):
#     def kthLargestNumber(self, nums, k):
#         """
#         :type nums: List[str]
#         :type k: int
#         :rtype: str
#         """
#         min_heap = []
                
#         for num in nums:
#             heapq.heappush(min_heap, (int(num), num))
                    
#             if len(min_heap) > k:
#                 heapq.heappop(min_heap)
                
#         return min_heap[0][1]
