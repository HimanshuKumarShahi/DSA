class Solution {
    /**
     * @param {number} n - size of the grid (n x n)
     * @param {number[][]} buildings - list of building coordinates [row, col]
     * @return {number} - count of covered buildings
     */
    countCoveredBuildings(n, buildings) {
        const rowMin = new Map();
        const rowMax = new Map();
        const colMin = new Map();
        const colMax = new Map();

        for (const [x, y] of buildings) {
            if (!rowMin.has(x) || y < rowMin.get(x)) rowMin.set(x, y);
            if (!rowMax.has(x) || y > rowMax.get(x)) rowMax.set(x, y);


            if (!colMin.has(y) || x < colMin.get(y)) colMin.set(y, x);
            if (!colMax.has(y) || x > colMax.get(y)) colMax.set(y, x);
        }

        let coveredCount = 0;


        for (const [x, y] of buildings) {
            const hasLeft = y > rowMin.get(x);
            const hasRight = y < rowMax.get(x);
            const hasAbove = x > colMin.get(y);
            const hasBelow = x < colMax.get(y);

            if (hasLeft && hasRight && hasAbove && hasBelow) {
                coveredCount++;
            }
        }

        return coveredCount;
    }
}