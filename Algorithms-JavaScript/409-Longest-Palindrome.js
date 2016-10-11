/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.
*/

'use strict'

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const dict = {}
  let len = 0
  let numOdds = 0

  s.split('').forEach(function(n) {
    if (typeof dict[n] === 'undefined') {
      dict[n] = true
      ++numOdds
    }
    else {
      delete dict[n]
      --numOdds
      len += 2
    }
  })

  return len + (numOdds > 0 ? 1 : 0)
}
