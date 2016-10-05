/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
const minDepth = function(root) {
  if (root === null) {
    return 0
  }

  const queue = [root]
  let length = 0

  while (true) {
    const levelLength = queue.length;
    ++length

    for (let i = 0; i < levelLength; ++i) {
      const node = queue.shift()

      if ((node.left === null) && (node.right === null)) {
        return length
      }

      if (node.left !== null) {
        queue.push(node.left)
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }
  }
}
