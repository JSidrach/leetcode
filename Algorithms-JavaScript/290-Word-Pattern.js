/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

'use strict'

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  const dict = {}
  const invDict = {}

  const matched = str.split(' ')

  if (pattern.length !== matched.length) {
    return false
  }

  for (let i = 0; i < pattern.length; ++i) {
    const key = pattern[i]
    const word = matched.shift()

    if ((typeof dict[key] !== 'undefined') && (dict[key] !== word)) {
      return false
    }

    if ((typeof invDict[word] !== 'undefined') && (invDict[word] !== key)) {
      return false
    }

    dict[key] = word
    invDict[word] = key
  }

  return (matched.length === 0)
}
