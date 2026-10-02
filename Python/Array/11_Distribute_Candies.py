class Solution:
    def maxCandyTypes(self, candyType):
        '''
        candyType: List[int] - list of integers representing the types of candies.
        Returns the maximum number of different types Hitesh can eat.
        '''
        limit = len(candyType) // 2 

        candy = len(set(candyType))

        if candy > limit:
            candies = limit
        else:
            candies = candy
      
        return candies

# -------------------------------------------------

class Solution:
    def maxCandyTypes(self, candyType: list[int]) -> int:
        # Find unique types of candies
        uniqueTypes = set(candyType)
        # Calculate the maximum number of candies Hitesh can eat
        maxCandiesHiteshCanEat = len(candyType) // 2
        # Return the minimum between the number of unique types and max candies he can eat
        return min(len(uniqueTypes), maxCandiesHiteshCanEat)