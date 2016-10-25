/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3

The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
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
const sumNumbers = function(root) {
  const generatePaths = function(node, l) {
    if (node === null) {
      return 0
    }

    const next = l * 10 + node.val

    if ((node.left === null) && (node.right === null)) {
      return next
    }

    return generatePaths(node.left, next) + generatePaths(node.right, next)
  }

  return generatePaths(root, 0)
}
