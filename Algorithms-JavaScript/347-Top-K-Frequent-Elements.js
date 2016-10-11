/*
 Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

'use strict'

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const freqs = {}
  nums.forEach(function(n) {
    if (typeof freqs[n] === 'undefined') {
      freqs[n] = 1
    }
    else {
      freqs[n] = freqs[n] + 1
    }
  })

  const tops = {}
  Object.keys(freqs).forEach(function(n) {
    const f = freqs[n]
    n = parseInt(n, 10)
    if (typeof tops[f] === 'undefined') {
      tops[f] = [n]
    }
    else {
      tops[f].push(n)
    }
  })

  let sol = []
  for (let i = nums.length; i > 0; --i) {
    const next = tops[i]
    if (typeof next !== 'undefined') {
      sol = sol.concat(next)
      if (sol.length === k) {
        return sol
      }
    }
  }

  return sol
}
