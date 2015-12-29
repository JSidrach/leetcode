/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  'use strict';

  nums.sort();

  let i = 0;
  while (nums.length > 0) {
    const last = nums.lastIndexOf(nums[i]) + 1;
    if (last > Math.floor(nums.length / 2)) {
      return nums[i];
    }

    nums = nums.slice(last, nums.length);
  }
};
