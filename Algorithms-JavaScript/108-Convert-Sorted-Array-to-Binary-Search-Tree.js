/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

'use strict'

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  if ((nums === null) || (nums.length === 0)) {
    return null
  }

  const mid = nums.length >> 1
  const node = new TreeNode(nums[mid])

  if (mid > 0) {
    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  }

  return node
}
