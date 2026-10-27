class Solution:
    def findJudge(self, n, trust):
        '''
        n: int - the number of people in the town
        trust: List[List[int]] - a list of pairs, where trust[i] = [a, b] means person a trusts person b
        '''
        # Your implementation here
        trust_scores = [0] * (n + 1)
        
        for a, b in trust:
            trust_scores[a] -= 1  
            trust_scores[b] += 1  
            
        for i in range(1, n + 1):
            if trust_scores[i] == n - 1:
                return i
                
        return -1
