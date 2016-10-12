/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.

*/

'use strict'

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const intersection = []
  let i1 = 0
  let i2 = 0

  while ((i1 < nums1.length) && (i2 < nums2.length)) {
    const n1 = nums1[i1]
    const n2 = nums2[i2]

    if (n1 === n2) {
      intersection.push(n1)
      ++i1
      ++i2
    }
    else if (n1 > n2) {
      ++i2
    }
    else {
      ++i1
    }
  }

  return intersection
}
