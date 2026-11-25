/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

    let parameter = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    for( let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){

            if(grid[i][j] == 1){

                if( i == 0 || grid[i - 1][j] == 0){
                    parameter +=1 ;
                }
                if( i == rows - 1 || grid[i + 1][j] == 0){
                    parameter +=1 ;
                }
                if( j == 0 || grid[i][j-1] == 0){
                    parameter += 1
                }
                if( j == cols -1  || grid[i][j + 1] == 0){
                    parameter += 1
                }
            }
        }
    }
    return parameter
}; 


class Solution {
  dfs(grid, r, c) {
    const rows = grid.length;
    const cols = grid[0].length;

    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0";

    this.dfs(grid, r + 1, c);
    this.dfs(grid, r - 1, c);
    this.dfs(grid, r, c + 1);
    this.dfs(grid, r, c - 1);
  }

  numIslands(grid) {
    // grid: 2D array representing the map
    // Returns the total number of islands

    if (!grid.length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let Count = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          this.dfs(grid, r, c);
          Count++;
        }
      }
    }

    return Count;
  }
}
