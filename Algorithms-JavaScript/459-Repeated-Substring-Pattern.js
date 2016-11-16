/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:

Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.

Example 2:

Input: "aba"

Output: False

Example 3:

Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

'use strict'

/**
 * @param {string} str
 * @return {boolean}
 */
const repeatedSubstringPattern = function(str) {
  const l = str.length
  const l2 = Math.floor(l / 2)

  for (let i = 1; i <= l2; ++i) {
    if ((l % i === 0) && (str.substring(0, i).repeat(l / i) === str)) {
      return true
    }
  }

  return false
}
