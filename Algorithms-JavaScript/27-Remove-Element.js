/*
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

'use strict'

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let numsLength = nums.length

  for (let i = 0; i < numsLength; ++i) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      --numsLength;
      --i
    }
  }

  return numsLength
}
