/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

'use strict'

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  const values = [1, 5, 10, 50, 100, 500, 1000]
  let currentPhase = letters.length - 1
  let output = ''

  while (currentPhase >= 0) {
    const nextNum = Math.floor(num / values[currentPhase])
    if ((nextNum >= 1) && (nextNum <= 3) && (currentPhase % 2 === 0)) {
      output = output + letters[currentPhase].repeat(nextNum)
    }
    else if (nextNum === 1) {
      output = output + letters[currentPhase]
    }
    else if (nextNum === 4) {
      output = output + letters[currentPhase] + letters[currentPhase + 1]
    }
    else if (nextNum === 5) {
      output = output + letters[currentPhase + 1]
    }
    else if (nextNum === 9) {
      output = output + letters[currentPhase] + letters[currentPhase + 2]
    }
    else if (nextNum >= 6) {
      output = output + letters[currentPhase + 1] + letters[currentPhase].repeat(nextNum - 5)
    }

    num -= nextNum * values[currentPhase]
    currentPhase -= 2
  }

  return output
}
