/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
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
const rightSideView = function(root) {
  if (root === null) {
    return []
  }

  const output = []
  const list = [root]
  let listLength = 1

  while (listLength !== 0) {
    output.push(list[listLength - 1].val)

    for (let i = 0; i < listLength; ++i) {
      const node = list.shift()

      if (node.left !== null) {
        list.push(node.left)
      }

      if (node.right !== null) {
        list.push(node.right)
      }
    }

    listLength = list.length
  }

  return output
}
