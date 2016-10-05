/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => permutation(nums, 0, nums.length - 1, {})

const permutation = function(nums, i, n, hash) {
  if (i === n) {
    return [nums.slice()]
  }

  const output = []

  for (let j = i; j <= n; ++j) {
    const swap = nums[i]
    nums[i] = nums[j]
    nums[j] = swap

    const key = nums.join()
    if (typeof hash[key] === 'undefined') {
      const p = permutation(nums, i + 1, n, hash)
      hash[key] = true
      output.push.apply(output, p)
    }

    nums[j] = nums[i]
    nums[i] = swap
  }

  return output
}
