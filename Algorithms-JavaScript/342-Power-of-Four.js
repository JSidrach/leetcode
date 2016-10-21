/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/

'use strict'

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
  return ((num > 0) && (Math.pow(4, 15) % Math.sqrt(num) === 0))
}
