/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let currentCount = 0;
    let maxCount = 0;
    for (const num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(currentCount, maxCount)
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
};