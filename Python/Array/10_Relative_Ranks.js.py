class Solution:
    def findRelativeRanks(self, score):
        '''
        score: List[int] - an array of integers representing the scores of each athlete
        '''
        pairs = []

        for index, value in enumerate(score):
            pairs.append((value, index))
        
        pairs.sort(reverse=True, key=lambda x: x[0])
        
        result = [""] * len(score)
        
        for rank, (s, original_idx) in enumerate(pairs):
            if rank == 0:
                result[original_idx] = "Gold Medal"
            elif rank == 1:
                result[original_idx] = "Silver Medal"
            elif rank == 2:
                result[original_idx] = "Bronze Medal"
            else:
                result[original_idx] = str(rank + 1)
                
        return result
