/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

'use strict'

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const result = []
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  for (let k = Math.max(i, j) + 1; (i >= 0) && (j >= 0); --i, --j, --k) {
    result[k] = a[i] ^ b[j] ^ carry

    if ((carry === 1) && (a[i] === b[j]) && (a[i] === '0')) {
      carry = 0
    }
    else if ((carry === 0) && (a[i] === b[j]) && (a[i] === '1')) {
      carry = 1
    }
  }

  const rest = (i > j) ? a : b

  for (i = (i > j) ? i : j; i >= 0; --i) {
    if (carry === 1) {
      result[i] = (rest[i] === '0') ? 1 : 0
      carry = (rest[i] === '0') ? 0 : 1
    }
    else {
      result[i] = rest[i]
    }
  }

  return (carry === 1) ? '1' + result.join('') : result.join('')
}
