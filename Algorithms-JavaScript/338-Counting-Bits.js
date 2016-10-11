/*
Given a non negative integer number num.
For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2]
*/

'use strict'

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
  const output = [0]

  for (let i = 1, j = 0, nextMultiple = 1; i <= num; ++i, ++j) {
    if (i === nextMultiple) {
        j = 0
        nextMultiple *= 2
    }

    output.push(output[j] + 1)
  }

  return output
}
