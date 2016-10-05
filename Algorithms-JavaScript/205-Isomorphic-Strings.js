/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
*/

'use strict'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  const dict = {}
  const invDict = {}

  for (let i = 0; i < s.length; ++i) {
    const key = s[i]
    const value = t[i]

    if ((typeof dict[key] !== 'undefined') && (dict[key] !== value)) {
      return false
    }

    if ((typeof invDict[value] !== 'undefined') && (invDict[value] !== key)) {
      return false
    }

    dict[key] = value
    invDict[value] = key
  }

  return true
}
