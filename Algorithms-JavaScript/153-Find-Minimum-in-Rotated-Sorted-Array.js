/*
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  'use strict';

  let lower = 0;
  let upper = nums.length - 1;

  while (lower < upper) {
    const middle = lower + Math.floor((upper - lower) / 2);

    if (nums[middle] > nums[upper]) {
      lower = middle + 1;
    }
    else {
      upper = middle;
    }
  }

  return nums[lower];
};
