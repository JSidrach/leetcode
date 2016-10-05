/*
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

'use strict'

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
  let tenFactors = 0

  while (n > 1) {
    n = ~~(n / 5)
    tenFactors += n
  }

  return tenFactors
}
