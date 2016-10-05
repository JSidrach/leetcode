/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
const isSymmetric = function(root) {
  return (root === null) ? true : checkBothTrees(root.left, root.right)
}

const checkBothTrees = function(left, right) {
  if ((left === null) || (right === null)) {
    return (left === right)
  }

  return ((left.val === right.val) && checkBothTrees(left.right, right.left) && checkBothTrees(left.left, right.right))
}
