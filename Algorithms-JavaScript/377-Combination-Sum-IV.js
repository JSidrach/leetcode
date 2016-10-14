/*
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
*/

'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= target; ++i) {
    for (let j = 0; j <= nums.length; ++j) {
      const n = nums[j]
      if (i >= n) {
        dp[i] += dp[i - n]
      }
    }
  }

  return dp[target]
}
