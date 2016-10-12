/*
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers.
Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.

Hint:
    There is a simple O(n) solution to this problem.
    You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
*/

'use strict'

/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
  if (n === 2) {
    return 1
  }

  if (n === 3) {
    return 2
  }

  const mod = n % 3

  if (mod === 0) {
    return Math.pow(3, n / 3)
  }

  if (mod === 1) {
    return 4 * Math.pow(3, ((n - 1) / 3) - 1)
  }

  return 2 * Math.pow(3, (n - 2) / 3)
}
