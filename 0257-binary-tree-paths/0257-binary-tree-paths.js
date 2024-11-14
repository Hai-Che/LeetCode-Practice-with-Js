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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = []
    if (!root) return result;
    function findPath(root, path) {
        if (!root) return ;
        path.push(root.val);
        if (!root.left && !root.right) {
            result.push(path.join('->'))
        } else {
            if (root.left) findPath(root.left, path)
            if (root.right) findPath(root.right, path)
        }
        path.pop()
    }
    findPath(root, [])
    return result
};