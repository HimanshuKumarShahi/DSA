class Solution:
    def isInterleave(self, s1, s2, s3):
        '''
        s1: str : first input string
        s2: str : second input string
        s3: str : string to check if it's an interleaving of s1 and s2
        '''
        m, n = len(s1), len(s2)
        
        if m + n != len(s3):
            return False
            
        if m < n:
            s1, s2 = s2, s1
            m, n = n, m
            
        dp = [False] * (n + 1)
        
        dp[0] = True
        
        for j in range(1, n + 1):
            dp[j] = dp[j - 1] and s2[j - 1] == s3[j - 1]
            
        for i in range(1, m + 1):
            dp[0] = dp[0] and s1[i - 1] == s3[i - 1]
            
            for j in range(1, n + 1):
                match_s1 = dp[j] and s1[i - 1] == s3[i + j - 1]
                match_s2 = dp[j - 1] and s2[j - 1] == s3[i + j - 1]
                
                dp[j] = match_s1 or match_s2
                
        return dp[n]
