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
 * @return {number}
 */
var minDepth = function (root) {
    //DFS
    if (!root) return 0;
    const queue = [[root, 1]]
    while (queue.length > 0) {
        const [currentNode, depth] = queue.shift()
        if (!currentNode.left && !currentNode.right) return depth;
        if (currentNode.left) queue.push([currentNode.left, depth + 1])
        if (currentNode.right) queue.push([currentNode.right, depth + 1])
    }
};