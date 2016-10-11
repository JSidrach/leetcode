/*
 Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
    Each element in the result must be unique.
    The result can be in any order.
*/

'use strict'

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  const output = []

  s1.forEach(function (n) {
    if (s2.has(n)) {
      output.push(n)
    }
  })

  return output
}
