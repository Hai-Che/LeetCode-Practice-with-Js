/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let p1 = num1.length - 1
    let p2 = num2.length - 1
    let carry = 0
    let result = []
    while (p1 >= 0 || p2 >= 0 || carry > 0) {
        let digit1 = p1 >= 0 ? parseInt(num1[p1]) : 0
        let digit2 = p2 >= 0 ? parseInt(num2[p2]) : 0
        let sum = digit1 + digit2 + carry
        carry = Math.floor(sum / 10)
        result.push(sum % 10)
        p1--;
        p2--;
    }
    return result.reverse().join('')
};