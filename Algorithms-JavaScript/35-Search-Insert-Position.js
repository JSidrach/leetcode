/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  'use strict';

  let lower = 0;
  let upper = nums.length;

  while (lower < upper) {
    const middle = lower + Math.floor((upper - lower) / 2);

    if (target > nums[middle]) {
      lower = middle + 1;
    }
    else {
      upper = middle;
    }
  }

  return lower;
};
