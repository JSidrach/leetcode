/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const nl = nums.length
  const sols = [[]]

  for (let i = 0; i < nl; ++i) {
    const num = nums[i]
    const sl = sols.length
    for (let j = 0; j < sl; j++) {
      const prev = sols[j]
      sols.push(prev.concat([num]))
    }
  }

  return sols
}
