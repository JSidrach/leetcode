/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const nLength = nums.length
  const visited = []

  for (let i = 0; i < nLength; ++i) {
    const num = nums[i]
    if (typeof visited[target - num] !== 'undefined') {
      return [visited[target - num], i + 1]
    }
    visited[nums[i]] = i + 1
  }
}
