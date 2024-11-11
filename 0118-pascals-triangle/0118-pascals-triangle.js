/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = []
    for (let row = 0; row < numRows; row++) {
        const newRow = []
        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) newRow.push(1)
            else {
                let prevRow = triangle[row - 1]
                newRow.push(prevRow[col - 1] + prevRow[col])
            }
        }
        triangle.push(newRow)
    }
    return triangle;
};