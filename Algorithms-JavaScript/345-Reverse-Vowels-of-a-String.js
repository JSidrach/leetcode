/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

'use strict'

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  const isVowel = function(c) {
    return ((c === 'a') ||
            (c === 'A') ||
            (c === 'e') ||
            (c === 'E') ||
            (c === 'i') ||
            (c === 'I') ||
            (c === 'o') ||
            (c === 'O') ||
            (c === 'u') ||
            (c === 'U'))
  }

  let low = 0
  let high = s.length - 1

  const r = s.split('')
  while (low < high) {
    const l = r[low]
    const h = r[high]
    const lVowel = isVowel(l)
    const hVowel = isVowel(h)

    if (lVowel && hVowel) {
      r[low++] = h
      r[high--] = l
    }
    else {
      if (!hVowel) {
        --high
      }
      if (!lVowel) {
        ++low
      }
    }
  }

  return r.join('')
}
