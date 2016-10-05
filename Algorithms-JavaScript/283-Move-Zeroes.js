/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {

  let totalDelete = 0
  let deleteBatch = 0
  let start = 0

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      if (deleteBatch === 0) {
        start = i
      }

      deleteBatch++
    }
    else if (deleteBatch > 0) {
      totalDelete += deleteBatch
      nums.splice(start, deleteBatch)
      i -= deleteBatch
      deleteBatch = 0
    }
  }

  while (totalDelete > 0) {
    nums.push(0)
    totalDelete--
  }
}
