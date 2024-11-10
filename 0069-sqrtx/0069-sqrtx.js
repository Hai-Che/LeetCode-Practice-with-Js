/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.floor(Math.sqrt(x))
    if (x < 2) return x;
    let left = 1
    let right = x
    let result = 0
    while (left<=right) {
        const mid = Math.floor((left + right)/2)
        const square = mid * mid
        if (square === x) return mid
        else if (square < x) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return result
};