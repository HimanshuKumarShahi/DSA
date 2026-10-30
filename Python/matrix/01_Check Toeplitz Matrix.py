class Solution:
    def isToeplitzMatrix(self, matrix):
        '''
        matrix: List[List[int]] - 2D list of integers representing the matrix
        Returns: bool - True if the matrix is Toeplitz, False otherwise
        '''
        rows = len(matrix)
        cols = len(matrix[0])
        for row in range(rows - 1):
            for col in range(cols - 1):
                if matrix[row][col] != matrix[row + 1][col + 1]:
                    return False
        return True
