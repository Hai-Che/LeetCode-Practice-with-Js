/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const storeMap = new Map()
    for (let i=0; i< nums.length; i++) {
        const checkExistValue = target - nums[i]
        if (storeMap.has(checkExistValue)) {
            return [storeMap.get(checkExistValue), i]
        }
        storeMap.set(nums[i], i)
    }
};