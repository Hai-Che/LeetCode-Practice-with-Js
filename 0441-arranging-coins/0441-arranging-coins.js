/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0;
    let right = n;
    while (left<=right) {
        let mid = Math.floor((left + right)/2)
        let midCoins = (mid*(mid+1))/2
        if (midCoins === n) return mid
        else if (midCoins > n) right = mid -1
        else left = mid + 1
    }
    return right
};