/*
Find the sum of all left leaves in a given binary tree.
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
const sumOfLeftLeaves = function(root) {
  const sumOfLeftLeavesRec = function(node, isLeft) {
    if (node === null) {
      return 0
    }

    if ((node.left === null) && (node.right === null)) {
      return isLeft ? node.val : 0
    }

    return sumOfLeftLeavesRec(node.left, true) + sumOfLeftLeavesRec(node.right, false)
  }

  return sumOfLeftLeavesRec(root, false)
}
