/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = [1]
    for (let col=1; col<= rowIndex; col++) {
        row[col] = (row[col-1]*(rowIndex-col+1))/col
    }
    return row
};