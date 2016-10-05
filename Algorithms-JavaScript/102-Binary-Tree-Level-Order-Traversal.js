/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (root === null) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length !== 0) {
    const newLevel = []
    const queueLength = queue.length

    for (let i = 0; i < queueLength; ++i) {
      const node = queue.shift()
      newLevel.push(node.val)

      if (node.left !== null) {
        queue.push(node.left)
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    result.push(newLevel)
  }

  return result
}
