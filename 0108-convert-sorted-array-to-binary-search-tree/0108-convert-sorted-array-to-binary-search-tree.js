/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
 function buildTree(left, right) {
    if (left > right) return null;
    let mid = Math.floor((left+right)/2)
    let rootNode = new TreeNode(nums[mid])
    rootNode.left = buildTree(left, mid-1)
    rootNode.right = buildTree(mid+1, right)
    return rootNode
 }
    return buildTree(0, nums.length-1)
};