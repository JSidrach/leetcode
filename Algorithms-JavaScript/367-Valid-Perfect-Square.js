/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True

Example 2:

Input: 14
Returns: False
*/

'use strict'

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let i = 1
  let sq = 1

  while (sq < num) {
    i += 2
    sq += i
  }

  return sq === num
}
