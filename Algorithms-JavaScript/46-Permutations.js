/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1]..
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const nl = nums.length
  const sols = [[]]

  for (let i = 0; i < nl; ++i) {
    const num = nums[i]
    const sl = sols.length

    for (let j = 0; j < sl; ++j) {
      const prev = sols.shift()

      for (let k = 0; k <= i; ++k) {
        const add = prev.slice()
        add.splice(k, 0, num)
        sols.push(add)
      }
    }
  }

  return sols
}
