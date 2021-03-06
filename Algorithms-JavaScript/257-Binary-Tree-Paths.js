/*
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  if (root === null) {
    return []
  }

  if ((root.left !== null) && (root.right !== null)) {
    const leftTree = binaryTreePaths(root.left)
    const rightTree = binaryTreePaths(root.right)

    for (let i = 0; i < leftTree.length; ++i) {
      leftTree[i] = root.val + '->' + leftTree[i]
    }

    for (let i = 0; i < rightTree.length; ++i) {
      rightTree[i] = root.val + '->' + rightTree[i]
    }

    return leftTree.concat(rightTree)
  }
  else if (root.left !== null) {
    const leftTree = binaryTreePaths(root.left)

    for (let i = 0; i < leftTree.length; ++i) {
      leftTree[i] = root.val + '->' + leftTree[i]
    }

    return leftTree
  }
  else if (root.right !== null) {
    const rightTree = binaryTreePaths(root.right)

    for (let i = 0; i < rightTree.length; ++i) {
      rightTree[i] = root.val + '->' + rightTree[i]
    }

    return rightTree
  }
  else {
    return [root.val.toString()]
  }
}
