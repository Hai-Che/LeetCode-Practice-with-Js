/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function checkBalance(root) {
        if (!root) return 0;
        let checkLeft = checkBalance(root.left)
        let checkRight = checkBalance(root.right)
        if (checkLeft === -1 || checkRight === -1) return -1;
        if (Math.abs(checkLeft - checkRight) > 1) return -1;
        return Math.max(checkLeft, checkRight) + 1
    }
    return checkBalance(root) !== -1
};