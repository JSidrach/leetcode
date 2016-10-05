/*
Follow up for "Find Minimum in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  let lower = 0
  let upper = nums.length - 1

  while (lower < upper) {
    const middle = lower + Math.floor((upper - lower) / 2)
    const num = nums[middle]

    if (num > nums[upper]) {
      lower = middle + 1
    }
    else if (num < nums[lower]) {
      upper = middle
    }
    else {
      --upper
    }
  }

  return nums[lower]
}
