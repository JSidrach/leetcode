/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  'use strict';

  let buffer = [];

  for (let i = 0; (i < nums.length); ++i) {
    if ((typeof buffer[nums[i]] === 'undefined') || ((i - buffer[nums[i]]) > k)) {
      buffer[nums[i]] = i;
    }
    else {
      return true;
    }
  }

  return false;
};
