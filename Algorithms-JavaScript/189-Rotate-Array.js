/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  'use strict';

  const length = nums.length;
  const shift = k % length;

  if ((shift <= 0) || (length === 0)) {
    return;
  }

  let emptyIndex =  0;
  let next = emptyIndex;
  let prev = nums[emptyIndex];

  for (let i = 0; i < length; ++i) {
    const index = (next - shift + length) % length;
    if (index === emptyIndex) {
      nums[next] = prev;
      ++emptyIndex;
      prev = nums[emptyIndex];
      next = emptyIndex;
    }
    else {
      nums[next] = nums[index];
      next = index;
    }
  }
};
