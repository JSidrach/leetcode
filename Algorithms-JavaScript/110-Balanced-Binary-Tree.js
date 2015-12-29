/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

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
var isBalanced = function(root) {
  'use strict';

  if (root === null) {
    return true;
  }

  const diff = getDepth(root.left) - getDepth(root.right);
  if ((diff > 1) || (diff < -1)) {
    return false;
  }

  return (isBalanced(root.left) && isBalanced(root.right));
};

var getDepth = function(node) {
  'use strict';

  return (node === null) ? 0 : (1 + Math.max(getDepth(node.left), getDepth(node.right)));
};
