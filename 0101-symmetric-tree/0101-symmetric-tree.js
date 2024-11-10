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
var isSymmetric = function (root) {
    if (!root) return true
    function checkMirror(leftChild, rightChild) {
        if (!leftChild && !rightChild) return true
        if (!leftChild || !rightChild || leftChild.val !== rightChild.val) return false
        return checkMirror(leftChild.left, rightChild.right) && checkMirror(leftChild.right, rightChild.left)
    }
    return checkMirror(root.left, root.right)


};