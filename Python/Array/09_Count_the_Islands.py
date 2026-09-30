class Solution(object):
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        parameter = 0
        rows = len(grid)
        cols = len(grid[0])

        for i in range(rows):
            for j in range(cols):
                if(grid[i][j] == 1):
                    if( i == 0 or grid[i-1][j] == 0):
                        parameter +=1
                    if(i == rows - 1 or grid[i + 1][j] == 0):
                        parameter+=1
                    if(j == 0 or grid[i][j - 1] == 0):
                        parameter+=1
                    if(j == cols - 1 or grid[i][j+1]== 0):
                        parameter+=1

        return parameter




class Solution:
    def dfs(self, grid, r, c):
        rows = len(grid)
        cols = len(grid[0])

        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':
            return

        grid[r][c] = '0'

        self.dfs(grid, r + 1, c)
        self.dfs(grid, r - 1, c)
        self.dfs(grid, r, c + 1)
        self.dfs(grid, r, c - 1)

    def numIslands(self, grid):
        if not grid:
            return 0

        rows = len(grid)
        cols = len(grid[0])
        island_count = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    self.dfs(grid, r, c)
                    island_count += 1

        return island_count