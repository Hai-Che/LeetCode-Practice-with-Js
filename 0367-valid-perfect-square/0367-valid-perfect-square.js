/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num < 2) return true
    let left = 2;
    let right = Math.floor(num / 2)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let square = mid * mid
        if (num === square) return true;
        if (square > num) right = mid - 1
        else left = mid + 1
    }
    return false

};