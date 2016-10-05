/*
Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
For example,
Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
*/

'use strict'

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function(root) {
  if (root === null) {
    return
  }

  const orig = { val: -1, next: null }
  const list = [root]
  let length = 1

  while (length !== 0) {
    let p = orig

    for (let i = 0; i < length; ++i) {
      const node = list.shift()
      p.next = node
      p = node

      if (p.left !== null) {
        list.push(p.left)
      }

      if (p.right !== null) {
        list.push(p.right)
      }
    }

    p.next = null
    length = list.length
  }
}
