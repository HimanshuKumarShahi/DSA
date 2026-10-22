class Solution:
    def countCoveredBuildings(self, n, buildings):
        """
        :param n: int - size of the grid (n x n)
        :param buildings: List[List[int]] - list of building coordinates [row, col]
        :return: int - count of covered buildings
        """
        row_min, row_max = {}, {}
        col_min, col_max = {}, {}

        for x, y in buildings:
            row_min[x] = min(row_min.get(x, float('inf')), y)
            row_max[x] = max(row_max.get(x, float('-inf')), y)
            col_min[y] = min(col_min.get(y, float('inf')), x)
            col_max[y] = max(col_max.get(y, float('-inf')), x)
            
        covered_count = 0
        
        for x, y in buildings:
            if (y > row_min[x] and y < row_max[x] and 
                x > col_min[y] and x < col_max[y]):
                
                covered_count += 1
                
        return covered_count

