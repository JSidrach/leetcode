/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

'use strict'

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  if (num < 10) {
    return num
  }

  return (num - 9 * Math.floor((num - 1) / 9))
}
