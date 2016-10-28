/*
Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
The path does not need to go through the root.

For example:
Given the below binary tree,

       1
      / \
     2   3

Return 6.
*/

'use strict'

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function(root) {
  const maxPathSumRec = function(node) {
    if (node === null) {
      return [-Infinity, -Infinity]
    }

    if ((node.left === null) && (node.right === null)) {
      return [node.val, node.val]
    }

    const l = maxPathSumRec(node.left)
    const r = maxPathSumRec(node.right)

    const open = Math.max(node.val, Math.max(node.val + l[0], node.val + r[0]))
    const closed = Math.max(Math.max(l[1], r[1]), Math.max(node.val + l[0] + r[0], open))

    return [open, closed]
  }

  return maxPathSumRec(root)[1]
}
