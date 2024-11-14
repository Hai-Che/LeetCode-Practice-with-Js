/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const numsLength = nums.length
    const expectSum = (numsLength * (numsLength + 1)) / 2
    const actualSum = nums.reduce((acc, num) => acc + num, 0)
    return expectSum - actualSum;
};