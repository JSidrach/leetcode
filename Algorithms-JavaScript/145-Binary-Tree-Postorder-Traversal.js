/*
Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

Note: Recursive solution is trivial, could you do it iteratively?
/*

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  'use strict';

  if (root === null) {
    return [];
  }

  let stack = [root];
  let output = [];

  while (stack.length !== 0) {
    const node = stack.pop();

    if ((node.left === null) && (node.right === null)) {
      output.push(node.val);
    }
    else {
      const left = node.left;
      const right = node.right;
      node.left = null;
      node.right = null;
      stack.push(node);

      if (right !== null) {
        stack.push(right);
      }

      if (left !== null) {
        stack.push(left);
      }
    }
  }

  return output;
};
