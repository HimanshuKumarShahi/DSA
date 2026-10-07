class Solution:
    def isValidMountainArray(self, arr):
        '''
        arr: List[int] - an array of integers
        returns: bool - whether the array is a valid mountain array
        '''
        if len(arr) < 3:
            return False

        i = 0
        
        while i + 1 < len(arr) and arr[i] < arr[i + 1]:
            i += 1
        
        if i == 0 or i == len(arr) - 1:
            return False

        while i + 1 < len(arr) and arr[i] > arr[i + 1]:
            i += 1

        return i == len(arr) - 1
