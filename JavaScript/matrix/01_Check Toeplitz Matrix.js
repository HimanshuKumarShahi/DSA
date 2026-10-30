class Solution {
  isToeplitzMatrix(matrix) {
    // matrix: 2D array of integers representing the matrix
    // Return true if matrix is Toeplitz, otherwise return false
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let r = 1; r < rows; r++) {
      for (let c = 1; c < cols; c++) {
        if (matrix[r][c] !== matrix[r - 1][c - 1]) {
          return false;
        }
      }
    }

    return true;
  }
}
