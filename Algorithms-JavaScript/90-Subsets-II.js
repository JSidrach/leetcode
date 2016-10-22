/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  nums.sort((a, b) => b - a)
  const nl = nums.length
  const sols = [[]]
  let start = 0

  for (let i = 0; i < nl; ++i) {
    const num = nums[i]
    const sl = sols.length

    for (let j = start; j < sl; ++j) {
      sols.push(sols[j].concat([num]))
    }
    start = (num !== nums[i + 1]) ? 0 : sl
  }

  return sols
}
