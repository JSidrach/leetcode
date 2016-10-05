/*
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/

'use strict'

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let carry = true
  let i = digits.length - 1

  while (carry && (i >= 0)) {
    digits[i] = (digits[i] + 1) % 10
    carry = (digits[i] === 0);
    --i
  }

  if (carry) {
    digits.unshift(1)
  }

  return digits
}
