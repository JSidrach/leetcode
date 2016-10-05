/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let result = 0

  nums.forEach(function(num) {
    result ^= num
  })

  return result
}
