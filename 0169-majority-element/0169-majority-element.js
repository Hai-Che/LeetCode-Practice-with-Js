/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = null;
    let count = 0;
    for (let num of nums) {
        if (count === 0) result = num
        count += result === num ? 1 : -1
    }
    return result
};