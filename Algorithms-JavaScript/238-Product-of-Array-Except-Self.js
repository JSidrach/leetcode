/*
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const length = nums.length

  if (length <= 1) {
    return nums
  }

  const output = [1]

  for (let i = 1; i < length; ++i) {
    output[i] = nums[i - 1] * output[i - 1]
  }

  let m = 1

  for (let i = length - 2; i >= 0; --i) {
    m *= nums[i + 1]
    output[i] *= m
  }

  return output
}
