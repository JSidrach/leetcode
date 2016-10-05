/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Hint:

Try to utilize the property of a BST.
What if you could modify the BST node's structure?
The optimal runtime complexity is O(height of BST).
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
  const stack = [root]

  while (stack.length !== 0) {
    const node = stack.pop()

    if (node.left === null) {
      if (k === 1) {
        return node.val
      }

      if (node.right !== null) {
        stack.push(node.right)
      }

      --k
    }
    else {
      const tmp = node.left
      node.left = null
      stack.push(node)
      stack.push(tmp)
    }
  }
}
