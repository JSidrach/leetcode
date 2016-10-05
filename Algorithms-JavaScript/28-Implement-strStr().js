/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

'use strict'

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === '') {
    return 0
  }

  const maxStart = haystack.length - needle.length

  for (let i = 0; i <= maxStart; ++i) {
    let j = i

    while ((j < (i + needle.length)) && (j < haystack.length) && ((j - i) < needle.length) && (haystack[j] === needle[j - i])) {
      ++j
    }

    if ((j - i) === needle.length) {
      return i
    }
  }

  return -1
}
