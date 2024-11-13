/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const checkDup = new Set();
    for (const num of nums) {
        if (checkDup.has(num)) return true
        checkDup.add(num)
    }
    return false
};