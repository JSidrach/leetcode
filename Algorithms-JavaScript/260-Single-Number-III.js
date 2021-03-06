/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) {
  let ab = 0

  nums.forEach(function(num) {
    ab ^= num
  })

  const lastDiff = (ab & (ab - 1)) ^ ab

  let a = 0
  let b = 0

  nums.forEach(function(num) {
    if (num & lastDiff) {
      a ^= num
    }
    else {
      b ^= num
    }
  })

  return [a, b]
}
