class Solution(object):
    def numberOfPermutations(self, n, requirements):
        """
        :type n: int
        :type requirements: List[List[int]]
        :rtype: int
        """
        MOD = 10**9 + 7
        
        req_map = [-1] * n
        for end, cnt in requirements:
            req_map[end] = cnt
            
        if req_map[0] > 0:
            return 0
        req_map[0] = 0
        
        max_inv = max(req_map)

        dp = [0] * (max_inv + 1)
        dp[0] = 1          

        for i in range(1, n):
            next_dp = [0] * (max_inv + 1)
            current_sum = 0

            for j in range(max_inv + 1):
                current_sum = (current_sum + dp[j]) % MOD
                

                if j >= i + 1:
                    current_sum = (current_sum - dp[j - (i + 1)] + MOD) % MOD
                    
                next_dp[j] = current_sum

            if req_map[i] >= 0:
                target = req_map[i]
                for j in range(max_inv + 1):
                    if j != target:
                        next_dp[j] = 0
                        
            dp = next_dp
            
        return dp[req_map[n - 1]]
        