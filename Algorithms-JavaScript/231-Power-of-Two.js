/*
Given an integer, write a function to determine if it is a power of two.
*/

'use strict'

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  return (n <= 0) ? false : (((n - 1) & n) === 0)
}
