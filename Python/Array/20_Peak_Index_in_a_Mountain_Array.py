class Solution(object):
    def peakIndexInMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        
        """
        left = 1

        right = len(arr)-1

        while left <= right:
            mid = left + (right - left) // 2
            
            if arr[mid] > arr[mid - 1] and arr[mid] > arr[mid + 1]:
                return mid
            
            if arr[mid] > arr[mid - 1]:
                left = mid + 1
            else:
                
                right = mid - 1
        return -1
        