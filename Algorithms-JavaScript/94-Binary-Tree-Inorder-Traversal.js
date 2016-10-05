/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?
*/

'use strict'

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  if (root === null) {
    return []
  }

  const stack = [root]
  const output = []

  while (stack.length !== 0) {
    const node = stack[stack.length - 1]
    if (node.left !== null) {
      stack.push(node.left)
      node.left = null
    }
    else {
      stack.pop()
      output.push(node.val)
      if (node.right !== null) {
        stack.push(node.right)
      }
    }
  }

  return output
}
