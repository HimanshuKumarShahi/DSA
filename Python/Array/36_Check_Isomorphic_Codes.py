class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        '''
        s: first string
        t: second string
        '''
        if len(s) != len(t):
            return False
            
        S, T = {}, {}
        
        for char_s, char_t in zip(s, t):

            if char_s in S and S[char_s] != char_t:
                return False

            if char_t in T and T[char_t] != char_s:
                return False
                
            S[char_s] = char_t
            T[char_t] = char_s
            
        return True
