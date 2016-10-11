/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.
*/

'use strict'

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const dict = {}

  magazine.split('').forEach(function(c) {
    if (typeof dict[c] === 'undefined') {
      dict[c] = 1
    }
    else {
      dict[c] = dict[c] + 1
    }
  })

  for (let i = 0; i < ransomNote.length; ++i) {
    const c = ransomNote[i]
    if ((typeof dict[c] === 'undefined') || (dict[c] === 0)) {
      return false
    }
    else {
      dict[c] = dict[c] - 1
    }
  }

  return true
}
