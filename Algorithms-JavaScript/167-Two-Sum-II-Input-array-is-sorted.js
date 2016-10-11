/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.
*/

'use strict'

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  let lower = 0
  let higher = numbers.length - 1

  while (lower < higher) {
    const num = numbers[lower] + numbers[higher]
    if (num < target) {
      ++lower
    }
    else if (num > target) {
      --higher
    }
    else {
      return [lower + 1, higher + 1]
    }
  }

  return [-1, -1]
}
