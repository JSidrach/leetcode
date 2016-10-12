/*
Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.

Note:
    The length of both num1 and num2 is < 5100.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

'use strict'

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let sum = ''
  let carry = 0
  let i1 = num1.length - 1
  let i2 = num2.length - 1

  while ((i1 >= 0) || (i2 >= 0)) {
    const d1 = (i1 >= 0) ? parseInt(num1[i1], 10) : 0
    const d2 = (i2 >= 0) ? parseInt(num2[i2], 10) : 0

    const partialSum = d1 + d2 + carry
    const d = partialSum % 10
    carry = Math.floor(partialSum / 10)

    sum = d + sum

    --i1
    --i2
  }

  return (carry > 0) ? (carry + sum) : sum
}
