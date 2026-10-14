class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        '''
        s: first string
        t: second string
        Returns true if s and t are isomorphic, false otherwise
        '''
        if len(s) != len(t):
            return False
            
        s_t = {}
        t_s = {}
        
        for S, T in zip(s, t):
            
            if S in s_t:
                if s_t[S] != T:
                    return False
            else:
                s_t[S] = T
                
            if T in t_s:
                if t_s[T] != S:
                    return False
            else:
                t_s[T] = S
                
        return True
