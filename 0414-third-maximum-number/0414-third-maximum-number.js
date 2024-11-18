/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const distinctNum = new Set(nums)
    const arrNum = [...distinctNum].sort((a, b) => b - a)
    if (arrNum.length < 3) return arrNum[0]
    return arrNum[2]
};