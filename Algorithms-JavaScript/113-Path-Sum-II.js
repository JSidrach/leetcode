/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
For example:
Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1

return

[
   [5,4,11,2],
   [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
  if (root === null) {
    return []
  }

  if ((root.left === null) && (root.right === null)) {
    return (root.val === sum) ? [[root.val]] : []
  }

  const rest = sum - root.val
  const add = ((p) => [root.val].concat(p))
  const l = pathSum(root.left, rest).map(add)
  const r = pathSum(root.right, rest).map(add)

  return l.concat(r)
}
