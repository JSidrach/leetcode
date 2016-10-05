/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"
*/

'use strict'

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const lists = [['']]

  for (let i = 1; i <= n; ++i) {
    const list = []

    for (let j = 0; j < i; ++j) {
      const firsts = lists[j]
      const rest = lists[i - j - 1]

      for (let k = 0; k < firsts.length; ++k) {
        for (let z = 0; z < rest.length; ++z) {
          list.push('(' + firsts[k] + ')' + rest[z])
        }
      }
    }

    lists.push(list)
  }

  return lists[n]
}
