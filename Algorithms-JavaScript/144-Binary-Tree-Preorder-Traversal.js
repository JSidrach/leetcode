/*
Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
const preorderTraversal = function(root) {
  if (root === null) {
    return []
  }

  const stack = [root]
  const output = []

  while (stack.length !== 0) {
    const node = stack.pop()
    output.push(node.val)

    if (node.right !== null) {
      stack.push(node.right)
    }

    if (node.left !== null) {
      stack.push(node.left)
    }
  }

  return output
}
