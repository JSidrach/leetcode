/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

'use strict'

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let seq = '1'

  for (let i = 1; i < n; ++i) {
    let nextSeq = ''
    let digit = seq[0]
    let count = 0

    for (let j = 0; j < seq.length; ++j) {
      const newDigit = seq[j]

      if (newDigit === digit) {
        ++count
      }
      else {
        nextSeq += count + digit
        digit = newDigit
        count = 1
      }
    }

    seq = nextSeq + count + digit
  }

  return seq
}
