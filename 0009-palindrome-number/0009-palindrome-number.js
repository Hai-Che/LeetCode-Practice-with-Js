/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString()
    let xReverseString = xString.split('').reverse().join('')
    return xString===xReverseString
};