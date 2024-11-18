/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let doubleString = s + s
    doubleString = doubleString.slice(1, -1)
    return doubleString.includes(s)
};