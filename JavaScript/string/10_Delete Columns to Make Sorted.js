/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const numRows = strs.length;
    const numCols = strs[0].length;
    let deletedColumns = 0;

    for (let col = 0; col < numCols; col++) {

        for (let row = 1; row < numRows; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                deletedColumns++;
                break; 
            }
        }
    }

    return deletedColumns;
};