class Solution:
    def commonFruitsInBaskets(self, array1, array2):
        '''
        array1: List[int] - the first array of integers
        array2: List[int] - the second array of integers
        
        '''        
        set2 = set(array2)
        set1 = set()
        number = []
        for num in array1:
            if num in set2 and num not in set1:
                number.append(num)
                set1.add(num)
                
        return number
