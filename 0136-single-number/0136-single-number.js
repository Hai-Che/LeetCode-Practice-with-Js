/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let check = 0
    for (const num of nums) {
        check ^= num
    }
    return check
    
};