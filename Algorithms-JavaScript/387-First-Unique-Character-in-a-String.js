/*
 Given a string, find the first non-repeating character in it and return it's index.
 If it doesn't exist, return -1.
*/

'use strict'

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const counts = {}

  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    if (typeof counts[c] === 'undefined') {
      counts[c] = 1
    }
    else {
      ++counts[c]
    }
  }

  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    if (counts[c] === 1) {
      return i
    }
  }

  return -1
}
