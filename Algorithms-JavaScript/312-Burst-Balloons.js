/*
Given n balloons, indexed from 0 to n-1.
Each balloon is painted with a number on it represented by array nums.
You are asked to burst all the balloons.
If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.
Here left and right are adjacent indices of i.
After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

Example:

Given [3, 1, 5, 8]

Return 167

   nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
  coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = function(nums) {
  const n = nums.length + 2
  const bs = [1].concat(nums).concat([1])

  const dp = Array(n).fill().map(() => Array(n).fill(0))
  for (let sublen = 2; sublen <  n; ++sublen) {
    for (let left = 0, right = sublen; left < (n - sublen); ++left, ++right) {
      for (let i = left + 1; i < right; ++i) {
        const popBalloon = bs[left] * bs[i] * bs[right] + dp[left][i] + dp[i][right]
        dp[left][right] = Math.max(dp[left][right], popBalloon)
      }
    }
  }

  return dp[0][n - 1]
}
