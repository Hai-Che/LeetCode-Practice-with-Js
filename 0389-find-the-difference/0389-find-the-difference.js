/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let result = 0;
    for (const char of s) {
        result ^= char.charCodeAt(0)
    }
    for (const char of t) {
        result ^= char.charCodeAt(0)
    }
    return String.fromCharCode(result)
};