/*
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  'use strict';

  let numsLength = nums.length;

  for (let i = 0; i < numsLength; ++i) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      --numsLength;
      --i;
    }
  }

  return numsLength;
};
