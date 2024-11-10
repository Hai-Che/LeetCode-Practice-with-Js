/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(" ")
    const lastSpaceIdx = s.lastIndexOf(" ")
    return s.length - lastSpaceIdx - 1
};