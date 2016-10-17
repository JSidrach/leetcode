/*
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:
    Each of the array element will not exceed 100.
    The array size will not exceed 200.

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {
  const len = nums.length
  const total = nums.reduce((a, b) => a + b)

  if ((total % 2) === 1) {
    return false
  }

  const half = total / 2
  const partialSum = Array(half + 1).fill(false)
  partialSum[0] = true

  nums.forEach(function(num) {
    for (let i = half; i >= num; --i) {
      if (partialSum[i - num]) {
        partialSum[i] = true
      }
    }
  })

  return partialSum[half]
}
