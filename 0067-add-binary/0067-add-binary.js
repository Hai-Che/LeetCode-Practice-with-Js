/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = ''
    let carry = 0
    let idxA = a.length - 1
    let idxB = b.length - 1
    while (idxA >= 0 || idxB >= 0 || carry > 0) {
        let indexA = idxA >= 0 ? parseInt(a[idxA]) : 0
        let indexB = idxB >= 0 ? parseInt(b[idxB]) : 0
        let sum = indexA + indexB + carry
        result = sum%2 + result
        carry = Math.floor(sum/2)
        idxA--;
        idxB--;
    }
    return result;
};