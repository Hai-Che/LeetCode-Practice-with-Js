/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    // if (n <= 0) return false;
    // while (n % 4 === 0) {
    //     n /= 4;
    // }
    // return n === 1;
    return n > 0 && (n & (n - 1)) === 0 && (n & (0x55555555)) !== 0;
};