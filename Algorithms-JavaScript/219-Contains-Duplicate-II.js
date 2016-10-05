/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/

'use strict'

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  const buffer = []

  for (let i = 0; (i < nums.length); ++i) {
    if ((typeof buffer[nums[i]] === 'undefined') || ((i - buffer[nums[i]]) > k)) {
      buffer[nums[i]] = i
    }
    else {
      return true
    }
  }

  return false
}
