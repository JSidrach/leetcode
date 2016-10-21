/*
Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.
*/

'use strict'

/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  const output = []

  const addNums = function(min) {
    for (let i = 0, j = min; (i < 10) && (j <= n) && (output.length < n); ++i, ++j) {
      output.push(j)
      addNums(10 * j)
    }
  }

  addNums(1)

  return output
}
