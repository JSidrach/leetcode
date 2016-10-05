/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.
*/

'use strict'

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const tmp = s.trim()
  const last = tmp.lastIndexOf(' ')

  return (last === -1) ? tmp.length : (tmp.length - last - 1)
}
