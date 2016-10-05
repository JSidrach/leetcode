/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999
*/

'use strict'

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const letters = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let currentPhase = 'I'
  let num = 0

  for (let i = s.length - 1; i >= 0; --i) {
    if (letters[currentPhase] > letters[s[i]]) {
      num -= letters[s[i]]
    }
    else {
      num += letters[s[i]]
      currentPhase = s[i]
    }
  }

  return num
}
