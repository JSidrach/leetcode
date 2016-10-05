/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

'use strict'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  for (let i = 0; i < t.length; ++i) {
    const idx = s.indexOf(t[i])
    if (idx === -1) {
      return false
    }

    s = s.substr(0, idx) + s.substr(idx + 1, s.length)
  }

  return true
}
