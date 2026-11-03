class Solution(object):
    def minDeletionSize(self, strs):
        """
        :type strs: List[str]
        :rtype: int
        """
        num_rows = len(strs)
        num_cols = len(strs[0])
        deleted_columns = 0
        
        for col in range(num_cols):

            for row in range(1, num_rows):
                if strs[row][col] < strs[row - 1][col]:
                    deleted_columns += 1
                    break 
                    
        return deleted_columns
        