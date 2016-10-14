/*
The thief has found himself a new place for his thievery again.
There is only one entrance to this area, called the "root."
Besides the root, each house has one and only one parent house.
After a tour, the smart thief realized that "all houses in this place forms a binary tree".
It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:

     3
    / \
   2   3
    \   \
     3   1

Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

Example 2:

     3
    / \
   4   5
  / \   \
 1   3   1

Maximum amount of money the thief can rob = 4 + 5 = 9.
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
const rob = function(root) {
  const robAcc = function(node) {
    if (node === null) {
      return [0, 0]
    }

    const left = robAcc(node.left)
    const right = robAcc(node.right)

    const robNow = node.val + left[1] + right[1]
    const robLater = Math.max.apply(null, left) + Math.max.apply(null, right)

    return [robNow, robLater]
  }

  return Math.max.apply(null, robAcc(root))
}
