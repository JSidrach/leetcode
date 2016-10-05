/*
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Ensure that numbers within the set are sorted in ascending order.


Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
*/

'use strict'

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => combinationSum3Recursive(n, k, 0)

const combinationSum3Recursive = function(target, length, lastNumber) {
  if (length === 1) {
    if ((target <= lastNumber) || (target > 9)) {
      return []
    }
    else {
      return [[target]]
    }
  }

  const solutions = []

  for (let i = lastNumber + 1; (i <= 9) && (i < target); ++i) {
    const answer = combinationSum3Recursive(target - i, length - 1, i)

    for (let j = 0; j < answer.length; ++j) {
      solutions.push([i].concat(answer[j]))
    }
  }

  return solutions
}
