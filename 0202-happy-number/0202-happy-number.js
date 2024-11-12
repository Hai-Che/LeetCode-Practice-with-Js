/**
 * @param {number} n
 * @return {boolean}
 */
function sumOfSquare(num) {
    let sum = 0
    while (num > 0) {
        let digit = num % 10
        sum += digit * digit
        num = Math.floor(num / 10)
    }
    return sum
}

var isHappy = function (n) {
    const happySet = new Set()
    while (n !== 1 && !happySet.has(n)) {
        happySet.add(n)
        n = sumOfSquare(n)
    }
    return n === 1
};