/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
*/

'use strict'

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
  let sum = a ^ b
  let carry = a & b

  while (carry) {
    carry = carry << 1
    const nextCarry = sum & carry
    sum = sum ^ carry
    carry = nextCarry
  }

  return sum
}
